import express from "express"
import bcrypt from "bcryptjs"
import U from "../models/U.js"
import { g } from "../utils/jwt.js"
import cap from "../middleware/cap.js"

const r = express.Router()

r.post("/reg", cap, async (q, s) => {
  const { n, e, p } = q.body
  const h = await bcrypt.hash(p, 10)
  const u = await U.create({ n, e, p: h })
  s.json({ t: g(u._id) })
})

r.post("/login", async (q, s) => {
  const { e, p } = q.body
  const u = await U.findOne({ e })
  if (!u) return s.status(400).json({ m: "x" })
  const ok = await bcrypt.compare(p, u.p)
  if (!ok) return s.status(400).json({ m: "x" })
  s.json({ t: g(u._id) })
})

export default r