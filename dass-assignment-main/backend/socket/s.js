import M from "../models/M.js"

export default (io) => {
  io.on("connection", (sk) => {
    sk.on("join", (t) => sk.join(t))
    sk.on("msg", async (d) => {
      const m = await M.create(d)
      io.to(d.t).emit("msg", m)
    })
  })
}