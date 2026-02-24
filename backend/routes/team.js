import express from "express"
import T from "../models/T.js"
import auth from "../middleware/auth.js"

const r = express.Router()

r.post("/", auth, async (q, s) => {
  const t = await T.create({ n: q.body.n, m: [q.u] })
  s.json(t)
})

r.get("/", async (q, s) => {
  const t = await T.find().populate("m", "n e")
  s.json(t)
})

export default r