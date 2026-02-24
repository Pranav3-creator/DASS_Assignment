import mongoose from "mongoose"

const s = new mongoose.Schema({
  t: String,
  c: String,
  u: { type: mongoose.Schema.Types.ObjectId, ref: "U" }
}, { timestamps: true })

export default mongoose.model("P", s)