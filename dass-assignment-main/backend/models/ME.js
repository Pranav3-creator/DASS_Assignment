import mongoose from "mongoose"

const s = new mongoose.Schema({

  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },

  price: Number,

  sizes: [String],

  colors: [String],

  stock: Number,

  limit: Number

})

export default mongoose.model("Merchandise", s)