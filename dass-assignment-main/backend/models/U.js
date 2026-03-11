import mongoose from "mongoose"

const s = new mongoose.Schema({
  n: String,
  e: { type: String, unique: true },
  p: String,

  r: {
    type: String,
    enum: ["user", "organizer", "admin"],
    default: "user"
  }
})

export default mongoose.model("U", s)