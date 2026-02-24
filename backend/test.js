    import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected")
    process.exit()
  })
  .catch(err => {
    console.log("error")
    console.log(err.message)
    process.exit()
  })