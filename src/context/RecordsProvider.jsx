import {createContext, useState, useEffect} from 'react'

import sendAxios from '../../config/sendAxios'

const RecordsContext = createContext()
function RecordsProvider({children}) {

  const [loadingRecords, setLoadingRecords] = useState(true)
  const [lastRecords, setLastRecords] = useState([])
  const [amount, setAmount] = useState(5)

  useEffect(() => {
    getLastRecords()
  }, [amount])

  const getLastRecords = async () => {
    const token = localStorage.getItem('token')
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
      const {data} = await sendAxios.post('clients/last-records', {amount: amount || 5}, config )
      setLastRecords(data, ...lastRecords)
      setLoadingRecords(false)
    } catch (error) {
      console.log('error');
    }
  }
  
  const searchByPlate = async (plate) => {
    const token = localStorage.getItem('token')
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
      const {data} = await sendAxios.post('clients/search-plate', {plate}, config )
      setLastRecords(data)
      return {msg: 'Mostrando resultados'}
    } catch (error) {
      return {msg: error.response.data.msg, error: true}
    }
  }

  return (
    <RecordsContext.Provider
      value={{
        getLastRecords,
        loadingRecords,
        lastRecords,
        amount,
        setAmount,
        searchByPlate,
      }}
    >
      {children}
    </RecordsContext.Provider>
  )
}

export default RecordsContext
export {RecordsProvider}