import express from "express"
import P from "../models/P.js"
import auth from "../middleware/auth.js"

const r = express.Router()

r.post("/", auth, async (q, s) => {
  const p = await P.create({ t: q.body.t, c: q.body.c, u: q.u })
  s.json(p)
})

r.get("/", async (q, s) => {
  const p = await P.find().populate("u", "n")
  s.json(p)
})

export default r