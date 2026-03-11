import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Teams from "./pages/Teams"
import Forum from "./pages/Forum"
import Attendance from "./pages/Attendance"
import Chat from "./pages/Chat"
import Nav from "./components/Nav"
import Events from "./pages/Events"
import EventDetails from "./pages/EventDetails"
import Merch from "./pages/Merch"
import Feedback from "./pages/Feedback"

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  )
}