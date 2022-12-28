import {useEffect, useState} from 'react'

import RecordsList from '../components/RecordsList';
import RecordsSearch from '../components/RecordsSearch';
import useRecords from '../hooks/useRecords'
import Spinner from '../components/Spinner'
import AddRecord from '../components/AddRecord';


function Administrator() {

  const {getLastRecords, loadingRecords, lastRecords} = useRecords();
  const [addActive, setAddActive] = useState(true)

  useEffect(() => {
    getLastRecords()
  }, [])
  if(loadingRecords) return <Spinner />

  return (
    <>
      <div className='w-2/5 flex flex-col'>
        <h1 className='text-5xl text-center text-lime-800 font-bold uppercase'>Registros</h1>
        <div className='flex justify-around my-8'>
          <button
            onClick={e => {setAddActive(false)}}
            className={`${addActive ? 'bg-orange-700 text-white' : 'bg-white text-orange-700' } border-2 border-orange-700 hover:bg-white text-white hover:text-orange-700 uppercase font-bold p-2 rounded transition-all`}
          >{addActive ? 'buscar' : 'buscando'}</button>
          <button
            onClick={e => {setAddActive(true)}}
            className={`${addActive ? 'bg-white text-orange-700 ' : 'bg-orange-700 text-white'} uppercase border-2 border-orange-700 font-bold p-2 rounded transition-all`}
          >{addActive ? 'agregando' : 'agregar'}</button>
        </div>
        {addActive ? <AddRecord /> : <RecordsSearch />}
      </div>
      <div className='w-3/5'>
        <RecordsList />
      </div>
    </>
  )
}

export default Administrator