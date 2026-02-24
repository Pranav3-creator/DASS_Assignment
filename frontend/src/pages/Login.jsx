import { useState, useContext } from "react"
import a from "../api/api"
import { C } from "../context/Auth"

export default function Login() {
  const { login } = useContext(C)
  const [e, setE] = useState("")
  const [p, setP] = useState("")

  const s = async () => {
    const r = await a.post("/auth/login", { e, p })
    login(r.data.t)
  }

  return (
    <div>
      <input placeholder="email" onChange={x=>setE(x.target.value)} />
      <input type="password" placeholder="pass" onChange={x=>setP(x.target.value)} />
      <button onClick={s}>Login</button>
    </div>
  )
}