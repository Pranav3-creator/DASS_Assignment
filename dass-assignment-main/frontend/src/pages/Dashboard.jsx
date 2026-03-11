import { Link } from "react-router-dom"

export default function Dashboard(){

  return(
    <div>

      <h2>Felicity Event System</h2>

      <Link to="/events">Browse Events</Link>

      <br/>

      <Link to="/merch">Merchandise</Link>

      <br/>

      <Link to="/teams">Hackathon Teams</Link>

      <br/>

      <Link to="/forum">Discussion Forum</Link>

      <br/>

      <Link to="/attendance">QR Attendance</Link>

      <br/>

      <Link to="/feedback">Feedback</Link>

    </div>
  )
}