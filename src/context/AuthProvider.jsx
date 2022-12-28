import { createContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import sendAxios from "../../config/sendAxios";

const AuthContext = createContext()

function AuthProvider({children}) {
  const [auth, setAuth] = useState({})
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

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
        navigate('/')
      }
      
    }
    authenticateUser()
  }, [])

  const logOut = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loading,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export {AuthProvider}
export default AuthContext

