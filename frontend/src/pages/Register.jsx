import { useState } from "react"
import a from "../api/api"

export default function Register() {
  const [n, setN] = useState("")
  const [e, setE] = useState("")
  const [p, setP] = useState("")
  const [c, setC] = useState("")

  const s = async () => {
    await a.post("/auth/reg", { n, e, p, captcha: c })
    alert("done")
  }

  return (
    <div>
      <input placeholder="name" onChange={x=>setN(x.target.value)} />
      <input placeholder="email" onChange={x=>setE(x.target.value)} />
      <input placeholder="password" type="password" onChange={x=>setP(x.target.value)} />
      <input placeholder="enter 1234" onChange={x=>setC(x.target.value)} />
      <button onClick={s}>Register</button>
    </div>
  )
}