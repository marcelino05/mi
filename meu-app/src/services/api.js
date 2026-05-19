import axios from "axios";
import { jwtDecode } from "jwt-decode"

const api = axios.create({
  baseURL: "http://localhost:3000/api"
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")

  if (token) {
    try {
      const decoded = jwtDecode(token)
      
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("token")
        window.location.href = "/"
        return Promise.reject("token expirado")

      }
      config.headers.Authorization = `Bearer ${token}`
      
    } catch (erro) {
      localStorage.removeItem("token")
      window.location.href = "/"
      console.log(erro)
      return Promise.reject(erro)

    }
  }

  return config
})

export default api;