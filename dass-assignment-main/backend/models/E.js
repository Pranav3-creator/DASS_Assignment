import mongoose from "mongoose"

const s = new mongoose.Schema({

  title: String,
  category: String,
  description: String,
  venue: String,

  type: String,
  // normal | merchandise | hackathon

  teamMin: Number,
  teamMax: Number,

  fee: Number,
  prize: Number,

  status: String,
  // upcoming | ongoing | completed

  startDate: Date,
  endDate: Date,

  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "U"
  }

})

export default mongoose.model("Event", s)