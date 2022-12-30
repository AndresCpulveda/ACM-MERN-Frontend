import {useState} from 'react'

import Alert from './Alert'
import useRecords from '../hooks/useRecords'

function AddRecord() {
  const [client, setClient] = useState('')
  const [plate, setPlate] = useState('')
  const [date, setDate] = useState('')
  const [repair, setRepair] = useState('')
  const [charge, setCharge] = useState('')
  const [alert, setAlert] = useState({})

  const {addRecord} = useRecords();

  const handlePlate = (e) => {
    const value = e.target.value
    if(value.length < 7) {
      if(value.length < 4) {
        setPlate(value.toUpperCase())
        return
      }
      if(!isNaN(value.slice(-1))) {
        setPlate(value)
      }
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    const newRecord = {
      client,
      plate,
      date,
      repair,
      charge
    }

    try {
      const response = await addRecord(newRecord)
      setAlert(response)
      setCharge('')
      setClient('')
      setDate('')
      setPlate('')
      setRepair('')
      setTimeout(() => {
        setAlert({})
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className='bg-white shadow-lg rounded-lg p-4'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col mb-4'>
            <label className='text-lime-900 uppercase font-bold'>Cliente</label>
            <input
              name='client'
              value={client}
              onChange={e => setClient(e.target.value)}
              required
              className='bg-gray-200 rounded px-2 py-1'
            ></input>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-lime-900 uppercase font-bold'>Placa</label>
            <input
              value={plate}
              onChange={handlePlate}
              required
              className='bg-gray-200 rounded px-2 py-1'
            ></input>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-lime-900 uppercase font-bold'>Fecha</label>
            <input
              name='date'
              value={date}
              onChange={e => setDate(e.target.value)}
              type='date'
              className='bg-gray-200 rounded px-2 py-1'
            ></input>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-lime-900 uppercase font-bold'>Arreglo</label>
            <input
              name='repair'
              value={repair}
              onChange={e => setRepair(e.target.value)}
              required
              className='bg-gray-200 rounded px-2 py-1'
            ></input>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-lime-900 uppercase font-bold'>Precio</label>
            <input
              type='number'
              name='charge'
              value={charge}
              onChange={e => setCharge(parseInt(e.target.value))}
              required
              className='bg-gray-200 rounded px-2 py-1'
            ></input>
          </div>
          {alert.msg ?
            <Alert alert={alert} /> :
            <input
              type='submit'
              value='agregar'
              className='border-2 border-orange-700 bg-orange-700 hover:bg-white text-white hover:text-orange-700 uppercase font-bold p-2 rounded w-full cursor-pointer transition-all'
            ></input>
          }
        </form>
      </div>
    </>
  )
}

export default AddRecord