import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import http from "http"
import { Server } from "socket.io"
import db from "./config/db.js"
import auth from "./routes/auth.js"
import team from "./routes/team.js"
import forum from "./routes/forum.js"
import att from "./routes/att.js"
import rl from "./middleware/rl.js"
import err from "./middleware/err.js"
import s from "./socket/s.js"
import chat from "./routes/chat.js"
import events from "./routes/events.js"
import reg from "./routes/reg.js"
import merch from "./routes/merch.js"
import feedback from "./routes/feedback.js"

dotenv.config()
db()

const app = express()
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://dass-assignment-qr7w.vercel.app"
  ],
  credentials: true
}))
app.use(express.json())
app.use(rl)

app.use("/api/auth", auth)
app.use("/api/team", team)
app.use("/api/forum", forum)
app.use("/api/att", att)
app.use("/api/chat", chat)
app.use("/api/events", events)
app.use("/api/reg", reg)
app.use("/api/merch", merch)
app.use("/api/feedback", feedback)

const srv = http.createServer(app)
const io = new Server(srv, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://dass-assignment-qr7w.vercel.app"
    ],
    methods: ["GET", "POST"],
    credentials: true
  }
})

s(io)

app.use(err)

const p = process.env.PORT || 5000
srv.listen(p, () => console.log("run " + p))
