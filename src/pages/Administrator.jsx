import {useEffect} from 'react'

import RecordsList from '../components/RecordsList';
import RecordsSearch from '../components/RecordsSearch';
import useRecords from '../hooks/useRecords'
import Spinner from '../components/Spinner'


function Administrator() {
  const {loadingRecords, lastRecords} = useRecords();
  if(loadingRecords) return <Spinner />
  return (
    <>
      <div className='col-span-1 w-2/5'>
        <RecordsSearch />
      </div>
      <div className='col-span-2 w-3/5'>
        <RecordsList />
      </div>
    </>
  )
}

export default Administrator