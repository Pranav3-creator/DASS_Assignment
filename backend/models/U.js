import mongoose from "mongoose"

const s = new mongoose.Schema({
  n: String,
  e: { type: String, unique: true },
  p: String,
  r: { type: String, default: "user" }
})

export default mongoose.model("U", s)