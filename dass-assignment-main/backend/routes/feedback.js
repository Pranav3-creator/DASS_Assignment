import express from "express"
import auth from "../middleware/auth.js"
import F from "../models/F.js"

const r = express.Router()

r.post("/", auth, async (q, s) => {

  const f = await F.create({
    event: q.body.eventId,
    rating: q.body.rating,
    comment: q.body.comment
  })

  s.json(f)
})

r.get("/:eventId", async (q, s) => {

  const f = await F.find({
    event: q.params.eventId
  })

  s.json(f)
})

export default r