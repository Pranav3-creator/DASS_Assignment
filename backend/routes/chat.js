import express from "express"
import M from "../models/M.js"
import auth from "../middleware/auth.js"

const r = express.Router()

r.get("/:t", auth, async (q, s) => {
  const m = await M.find({ t: q.params.t })
    .populate("u", "n")
    .sort({ createdAt: 1 })
  s.json(m)
})

export default r