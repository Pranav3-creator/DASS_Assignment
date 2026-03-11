import { useEffect, useState } from "react"
import a from "../api/api"
import { Link } from "react-router-dom"

export default function Events() {

  const [e,setE] = useState([])

  const f = async () => {
    const r = await a.get("/events")
    setE(r.data)
  }

  useEffect(()=>{f()},[])

  return (
    <div>

      <h2>Events</h2>

      {e.map(x=>(
        <div key={x._id}>
          <h3>{x.title}</h3>
          <p>{x.category}</p>
          <Link to={"/events/"+x._id}>Open</Link>
        </div>
      ))}

    </div>
  )
}