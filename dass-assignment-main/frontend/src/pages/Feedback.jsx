import { useState } from "react"
import a from "../api/api"

export default function Feedback(){

  const [id,setId] = useState("")
  const [rating,setRating] = useState("")
  const [comment,setComment] = useState("")

  const send = async ()=>{
    await a.post("/feedback",{
      eventId:id,
      rating,
      comment
    })

    alert("feedback submitted")
  }

  return(
    <div>

      <input placeholder="Event ID"
        onChange={x=>setId(x.target.value)}
      />

      <input placeholder="Rating"
        onChange={x=>setRating(x.target.value)}
      />

      <textarea
        onChange={x=>setComment(x.target.value)}
      />

      <button onClick={send}>Submit</button>

    </div>
  )
}