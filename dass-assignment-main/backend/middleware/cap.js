export default (q, s, n) => {
  if (q.body.captcha !== "1234") return s.status(400).json({ m: "cap" })
  n()
}