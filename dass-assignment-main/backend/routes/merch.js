import express from "express"
import auth from "../middleware/auth.js"
import ME from "../models/ME.js"
import PU from "../models/PU.js"

const r = express.Router()

r.get("/", async (q, s) => {

  const m = await ME.find().populate("event")

  s.json(m)
})

r.post("/buy", auth, async (q, s) => {

  const p = await PU.create({
    u: q.u,
    merchandise: q.body.merchId,
    size: q.body.size,
    color: q.body.color,
    paymentScreenshot: q.body.paymentScreenshot
  })

  s.json(p)
})

r.post("/approve/:id", async (q, s) => {

  const p = await PU.findByIdAndUpdate(
    q.params.id,
    { status: "approved" },
    { new: true }
  )

  s.json(p)
})

r.post("/reject/:id", async (q, s) => {

  const p = await PU.findByIdAndUpdate(
    q.params.id,
    { status: "rejected" },
    { new: true }
  )

  s.json(p)
})

export default r