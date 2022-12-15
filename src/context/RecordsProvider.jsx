import {createContext, useState, useEffect} from 'react'

import sendAxios from '../../config/sendAxios'

const RecordsContext = createContext()
function RecordsProvider({children}) {

  const [lastRecords, setLastRecords] = useState([])

  useEffect(() => {
    const getLastRecords = async () => {
      const token = localStorage.getItem('token')

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      try {
        const {data} = await sendAxios.post('clients/last-records', {amount: 2}, config )
        setLastRecords(data)
      } catch (error) {
        console.log(error);
      }
    }
    getLastRecords();
  }, [])

  return (
    <RecordsContext.Provider
      value={{
        lastRecords,
      }}
    >
      {children}
    </RecordsContext.Provider>
  )
}

export default RecordsContext
export {RecordsProvider}