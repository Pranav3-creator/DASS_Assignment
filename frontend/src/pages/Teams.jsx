import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import a from "../api/api"

export default function Teams() {
  const [l, setL] = useState([])
  const [n, setN] = useState("")

  const f = async () => {
    const r = await a.get("/team")
    setL(r.data)
  }

  const c = async () => {
    await a.post("/team", { n })
    f()
  }

  useEffect(()=>{f()},[])

  return (
    <div>
      <input onChange={x=>setN(x.target.value)} />
      <button onClick={c}>Create</button>
     {l.map(t=>(
  <div key={t._id}>
    <div>{t.n}</div>
    <Link to={"/chat/" + t._id}>Open Chat</Link>
  </div>
))}
    </div>
  )
}