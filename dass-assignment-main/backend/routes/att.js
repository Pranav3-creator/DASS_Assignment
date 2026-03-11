import express from "express"
import auth from "../middleware/auth.js"
import A from "../models/A.js"
import R from "../models/R.js"
import { gen } from "../utils/qr.js"

const r = express.Router()

r.get("/qr", auth, async (q, s) => {
  const d = await gen(q.u)
  s.json({ qr: d })
})

r.post("/scan", auth, async (q, s) => {
  const { eventId } = q.body

  await A.create({
    u: q.u,
    e: eventId
  })

    await R.findOneAndUpdate(
    { u: q.u, e: eventId },
    { attended: true }
  )
  
  s.json({ m: "ok" })
})

export default r