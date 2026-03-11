import express from "express"
import auth from "../middleware/auth.js"
import R from "../models/R.js"

const r = express.Router()

r.post("/:eventId", auth, async (q, s) => {

  const exist = await R.findOne({
    u: q.u,
    e: q.params.eventId
  })

  if (exist) return s.status(400).json({ m: "already registered" })

  const reg = await R.create({
    u: q.u,
    e: q.params.eventId
  })

  s.json(reg)
})

r.get("/:eventId", async (q, s) => {

  const regs = await R.find({
    e: q.params.eventId
  }).populate("u", "n e")

  s.json(regs)
})

export default r