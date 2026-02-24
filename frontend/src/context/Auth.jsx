import { createContext, useState } from "react"

export const C = createContext()

export default function Auth({ children }) {
  const [u, setU] = useState(localStorage.getItem("t"))

  const login = (t) => {
    localStorage.setItem("t", t)
    setU(t)
  }

  const logout = () => {
    localStorage.removeItem("t")
    setU(null)
  }

  return (
    <C.Provider value={{ u, login, logout }}>
      {children}
    </C.Provider>
  )
}