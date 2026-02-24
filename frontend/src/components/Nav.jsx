import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div>
      <Link to="/">Home</Link> |
      <Link to="/teams">Teams</Link> |
      <Link to="/forum">Forum</Link> |
      <Link to="/attendance">Attendance</Link>
    </div>
  )
}