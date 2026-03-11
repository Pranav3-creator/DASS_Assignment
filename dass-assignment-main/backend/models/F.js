import mongoose from "mongoose"

const s = new mongoose.Schema({

  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },

  rating: Number,

  comment: String,

  anonymous: { type: Boolean, default: true }

})

export default mongoose.model("Feedback", s)