import express from "express"
import auth from "../middleware/auth.js"
import E from "../models/E.js"
import R from "../models/R.js"
import A from "../models/A.js"

const r = express.Router()

r.get("/:id/analytics", async (q, s) => {

  const eventId = q.params.id

  const totalRegistrations = await R.countDocuments({
    e: eventId
  })

  const totalAttendance = await R.countDocuments({
    e: eventId,
    attended: true
  })

  const attendanceRate =
    totalRegistrations === 0
      ? 0
      : (totalAttendance / totalRegistrations) * 100

  s.json({
    registrations: totalRegistrations,
    attendance: totalAttendance,
    attendanceRate: attendanceRate.toFixed(2)
  })

})

r.post("/", auth, async (q, s) => {
  try {
    const e = await E.create({
      title: q.body.title,
      category: q.body.category,
      description: q.body.description,
      venue: q.body.venue,

      type: q.body.type,
      teamMin: q.body.teamMin,
      teamMax: q.body.teamMax,

      fee: q.body.fee,
      prize: q.body.prize,

      status: q.body.status,

      startDate: q.body.startDate,
      endDate: q.body.endDate,

      organizer: q.u
    })

    s.json(e)
  } catch {
    s.status(500).json({ m: "err" })
  }
})

r.get("/", async (q, s) => {
  const e = await E.find().populate("organizer", "n")
  s.json(e)
})

r.get("/:id", async (q, s) => {
  const e = await E.findById(q.params.id).populate("organizer", "n")
  s.json(e)
})

export default r