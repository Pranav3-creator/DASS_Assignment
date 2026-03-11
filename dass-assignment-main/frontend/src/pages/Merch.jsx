import { useEffect,useState } from "react"
import a from "../api/api"

export default function Merch(){

  const [m,setM] = useState([])

  const f = async ()=>{
    const r = await a.get("/merch")
    setM(r.data)
  }

  const buy = async(id)=>{
    await a.post("/merch/buy",{
      merchId:id,
      size:"M",
      color:"Black",
      paymentScreenshot:"demo"
    })
    alert("purchase request sent")
  }

  useEffect(()=>{f()},[])

  return(
    <div>

      <h2>Merchandise</h2>

      {m.map(x=>(
        <div key={x._id}>
          <h3>{x.event?.title}</h3>
          <button onClick={()=>buy(x._id)}>Buy</button>
        </div>
      ))}

    </div>
  )
}