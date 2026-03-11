import mongoose from "mongoose"

const s = new mongoose.Schema({
  t: { type: mongoose.Schema.Types.ObjectId, ref: "T" },
  u: { type: mongoose.Schema.Types.ObjectId, ref: "U" },
  m: String
}, { timestamps: true })

export default mongoose.model("M", s)