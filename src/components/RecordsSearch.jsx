import {useState} from 'react'

import useRecords from '../hooks/useRecords'
import Alert from './Alert'

function RecordsSearch() {
  const [searchBy, setSearchBy] = useState('')
  const [search, setSearch] = useState('')
  const [alert, setAlert] = useState({})

  const {searchByPlate} = useRecords();

  const handleChange = (e) => {
    if(searchBy === '') {
      setAlert({msg: 'Elige que quieres buscar', error: true})
      setTimeout(() => {
        setAlert({})
      }, 3000);
      return
    }
    if(searchBy === 'plate') {
      const value = e.target.value
      if(value.length !== 7) {
        if(value.length < 4) {
          setSearch(value.toUpperCase())
          return
        }
        if(!isNaN(value.slice(-1))) {
          setSearch(value)
        }
      }
    } else {
      setSearch(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(search === '') {
      setAlert({msg: 'Escribe algo', error: true})
      setTimeout(() => {
        setAlert({})
      }, 3000);
      return
    }
    if(searchBy === '') {
      setAlert({msg: 'Elige que quieres buscar', error: true})
      setTimeout(() => {
        setAlert({})
      }, 3000);
      return
    }
    
    if(searchBy === 'plate') {
      const response = await searchByPlate(search)
      setAlert(response)
      setTimeout(() => {
        setAlert({})
      }, 3000);
    }
  }
  return (
    <>
    <form className='bg-white shadow-lg p-8 rounded-lg' onSubmit={handleSubmit}>
      <fieldset>
        <legend className='text-lime-900 font-bold'>Buscar por:</legend>
        <div className='flex mt-4 gap-4'>
          <div>
            <input onChange={e => setSearchBy(e.target.value)} type="radio" name="search" value="plate" />
            <label> Placa</label>
          </div>

          <div>
            <input onChange={e => setSearchBy(e.target.value)} type="radio" name="search" value="client"/>
            <label> Cliente</label>
          </div>

          <div>
            <input onChange={e => setSearchBy(e.target.value)} type="radio" name="search" value="repair"/>
            <label> Arreglo</label>
          </div>
        </div>
      </fieldset>
      <div className='flex flex-col'>
        <input
          onChange={handleChange}
          value={search}
          placeholder='Escribe aquí'
          className='rounded px-4 py-2 mt-4 bg-gray-200'
        ></input>
        {alert.msg ?
          <Alert alert={alert} /> :
          <input 
            className='border-2 border-orange-700 bg-orange-700 hover:bg-white text-white hover:text-orange-700 uppercase font-bold p-2 rounded mt-4 cursor-pointer transition-all'
            type='submit'
            value='buscar'
          ></input>
        }
      </div>
    </form>
    </>
  )
}

export default RecordsSearch