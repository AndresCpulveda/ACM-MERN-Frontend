import {createContext, useState, useEffect} from 'react'

import sendAxios from '../../config/sendAxios'

const RecordsContext = createContext()
function RecordsProvider({children}) {

  useEffect(() => {
    console.log(lastRecords);
    const getLastRecords = async () => {
      console.log('desde las records');
      const token = localStorage.getItem('token')
      console.log(token);
      if(!token) {
        console.log('no hay token');
        return
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      try {
        const {data} = await sendAxios.post('clients/last-records', {amount: amount}, config )
        console.log('requested');
        setLastRecords(data, ...lastRecords)
        setLoadingRecords(false)
      } catch (error) {
        console.log('error');
        console.log(error);
      }
    }  
    getLastRecords();
  }, [])

  const [loadingRecords, setLoadingRecords] = useState(true)
  const [lastRecords, setLastRecords] = useState([])
  const [amount, setAmount] = useState(5)

  

  return (
    <RecordsContext.Provider
      value={{
        loadingRecords,
        lastRecords,
        amount,
        setAmount,
      }}
    >
      {children}
    </RecordsContext.Provider>
  )
}

export default RecordsContext
export {RecordsProvider}