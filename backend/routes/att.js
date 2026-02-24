import express from "express"
import auth from "../middleware/auth.js"
import A from "../models/A.js"
import { gen } from "../utils/qr.js"

const r = express.Router()

r.get("/qr", auth, async (q, s) => {
  const d = await gen(q.u)
  s.json({ qr: d })
})

r.post("/scan", auth, async (q, s) => {
  await A.create({ u: q.u })
  s.json({ m: "ok" })
})

export default r