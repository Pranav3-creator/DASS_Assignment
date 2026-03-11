import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import a from "../api/api"

export default function EventDetails(){

  const {id} = useParams()

  const [e,setE] = useState({})

  const f = async () =>{
    const r = await a.get("/events/"+id)
    setE(r.data)
  }

  const reg = async ()=>{
    await a.post("/reg/"+id)
    alert("registered")
  }

  useEffect(()=>{f()},[])

  return(
    <div>

      <h2>{e.title}</h2>

      <p>{e.description}</p>

      <p>Venue: {e.venue}</p>

      <button onClick={reg}>Register</button>

    </div>
  )
}