import { useEffect, useState } from "react"
import a from "../api/api"

export default function Forum() {
  const [l, setL] = useState([])
  const [t, setT] = useState("")
  const [c, setC] = useState("")

  const f = async () => {
    const r = await a.get("/forum")
    setL(r.data)
  }

  const p = async () => {
    await a.post("/forum", { t, c })
    f()
  }

  useEffect(()=>{f()},[])

  return (
    <div>
      <input placeholder="title" onChange={x=>setT(x.target.value)} />
      <input placeholder="content" onChange={x=>setC(x.target.value)} />
      <button onClick={p}>Post</button>
      {l.map(x=>(
        <div key={x._id}>
          <b>{x.t}</b> - {x.c}
        </div>
      ))}
    </div>
  )
}