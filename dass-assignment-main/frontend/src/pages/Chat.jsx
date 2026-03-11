import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { io } from "socket.io-client"
import a from "../api/api"

const sk = io(import.meta.env.VITE_SOCKET)

export default function Chat() {
  const { id } = useParams()
  const [m, setM] = useState([])
  const [txt, setTxt] = useState("")

  useEffect(()=>{
    sk.emit("join", id)
    a.get("/chat/"+id).then(r=>setM(r.data))
    sk.on("msg", d=>setM(x=>[...x,d]))
  },[id])

  const s = ()=>{
    sk.emit("msg",{ t:id, m:txt })
    setTxt("")
  }

  return (
    <div>
      {m.map((x,i)=><div key={i}>{x.m}</div>)}
      <input value={txt} onChange={e=>setTxt(e.target.value)} />
      <button onClick={s}>Send</button>
    </div>
  )
}
