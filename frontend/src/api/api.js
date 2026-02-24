import axios from "axios"

const a = axios.create({
  baseURL: "http://localhost:5000/api"
})

a.interceptors.request.use(c => {
  const t = localStorage.getItem("t")
  if (t) c.headers.Authorization = "Bearer " + t
  return c
})

export default a