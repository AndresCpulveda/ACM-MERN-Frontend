import {useState} from 'react'

import Alert from './Alert'
import useRecords from '../hooks/useRecords'

function AddRecord() {
  const [newRecord, setNewRecord] = useState({})
  const [plate, setPlate] = useState('')
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
    setNewRecord({
      ...newRecord,
      plate: plate
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      console.log(newRecord);
      const response = await addRecord(newRecord)
      setAlert(response)
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
              value={newRecord.client || ''}
              onChange={e => setNewRecord({
                ...newRecord,
                [e.target.name] : e.target.value
              })}
              required
              className='bg-gray-200 rounded px-2 py-1'
            ></input>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-lime-900 uppercase font-bold'>Placa</label>
            <input
              value={plate || ''}
              onChange={handlePlate}
              required
              className='bg-gray-200 rounded px-2 py-1'
            ></input>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-lime-900 uppercase font-bold'>Fecha</label>
            <input
              name='date'
              value={newRecord.date || ''}
              onChange={e => setNewRecord({
                ...newRecord,
                [e.target.name] : e.target.value
              })}
              type='date'
              className='bg-gray-200 rounded px-2 py-1'
            ></input>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-lime-900 uppercase font-bold'>Arreglo</label>
            <input
              name='repair'
              value={newRecord.repair || ''}
              onChange={e => setNewRecord({
                ...newRecord,
                [e.target.name] : e.target.value
              })}
              required
              className='bg-gray-200 rounded px-2 py-1'
            ></input>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-lime-900 uppercase font-bold'>Precio</label>
            <input
              type='number'
              name='charge'
              value={newRecord.charge || ''}
              onChange={e => setNewRecord({
                ...newRecord,
                [e.target.name] : parseInt(e.target.value)
              })}
              required
              className='bg-gray-200 rounded px-2 py-1'
            ></input>
          </div>
          <input
          type='submit'
          value='agregar'
          className='border-2 border-orange-700 bg-orange-700 hover:bg-white text-white hover:text-orange-700 uppercase font-bold p-2 rounded w-full cursor-pointer transition-all'
          ></input>
        </form>
        {alert.msg ? <Alert alert={alert} /> : null}
      </div>
    </>
  )
}

export default AddRecord