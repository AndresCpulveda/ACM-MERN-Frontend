import { createContext, useEffect, useState } from "react";
import sendAxios from "../../config/sendAxios";

const AuthContext = createContext()

function AuthProvider({children}) {
  const [auth, setAuth] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const authenticateUser = async () => {
      const token = localStorage.getItem('token')
      if(!token) {
        setLoading(false)
        return
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      try {
        const {data} = await sendAxios('administrators/', config)
        setAuth(data)
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
      
    }
    authenticateUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export {AuthProvider}
export default AuthContext

