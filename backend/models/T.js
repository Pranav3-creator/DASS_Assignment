import mongoose from "mongoose"

const s = new mongoose.Schema({
  n: String,
  m: [{ type: mongoose.Schema.Types.ObjectId, ref: "U" }]
})

export default mongoose.model("T", s)