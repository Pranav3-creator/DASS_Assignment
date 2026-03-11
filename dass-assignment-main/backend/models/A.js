import mongoose from "mongoose"

const s = new mongoose.Schema({

  u: { type: mongoose.Schema.Types.ObjectId, ref: "U" },

  e: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },

  ts: { type: Date, default: Date.now }

})

export default mongoose.model("A", s)