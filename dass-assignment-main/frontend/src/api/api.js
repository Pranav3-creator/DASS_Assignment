import axios from "axios"

const a = axios.create({
  baseURL: import.meta.env.VITE_API
})

a.interceptors.request.use(c => {
  const t = localStorage.getItem("t")
  if (t) c.headers.Authorization = "Bearer " + t
  return c
})

export default a
