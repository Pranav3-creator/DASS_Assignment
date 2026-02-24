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

dotenv.config()
db()

const app = express()
app.use(cors())
app.use(express.json())
app.use(rl)

app.use("/api/auth", auth)
app.use("/api/team", team)
app.use("/api/forum", forum)
app.use("/api/att", att)
app.use("/api/chat", chat)

const srv = http.createServer(app)
const io = new Server(srv, { cors: { origin: "*" } })

s(io)

app.use(err)

const p = process.env.PORT || 5000
srv.listen(p, () => console.log("run " + p))