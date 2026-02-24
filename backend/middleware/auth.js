import jwt from "jsonwebtoken"

export default (q, s, n) => {
  const t = q.headers.authorization?.split(" ")[1]
  if (!t) return s.status(401).json({ m: "no" })
  const d = jwt.verify(t, process.env.JWT_SECRET)
  q.u = d.id
  n()
}