import mongoose from "mongoose"

const s = new mongoose.Schema({
  u: { type: mongoose.Schema.Types.ObjectId, ref: "U" },
  ts: { type: Date, default: Date.now }
})

export default mongoose.model("A", s)