import mongoose from "mongoose"

const s = new mongoose.Schema({

  u: { type: mongoose.Schema.Types.ObjectId, ref: "U" },

  merchandise: { type: mongoose.Schema.Types.ObjectId, ref: "Merchandise" },

  size: String,

  color: String,

  paymentScreenshot: String,

  status: {
    type: String,
    default: "pending"
  }

})

export default mongoose.model("Purchase", s)