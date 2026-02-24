import { useState } from "react"
import a from "../api/api"

export default function Attendance() {
  const [q, setQ] = useState("")

  const g = async () => {
    const r = await a.get("/att/qr")
    setQ(r.data.qr)
  }

  const s = async () => {
    await a.post("/att/scan")
    alert("marked")
  }

  return (
    <div>
      <button onClick={g}>Get QR</button>
      {q && <img src={q} width="200" />}
      <button onClick={s}>Mark Attendance</button>
    </div>
  )
}