import { Link } from "react-router-dom"

export default function Dashboard() {
  return (
    <div>
      <h2>Hackathon Dashboard</h2>
      <div>
        <Link to="/teams">Team Registration</Link>
      </div>
      <div>
        <Link to="/forum">Discussion Forum</Link>
      </div>
      <div>
        <Link to="/attendance">QR Attendance</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}