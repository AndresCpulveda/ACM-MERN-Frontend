import {useEffect} from 'react'

import RecordsList from '../components/RecordsList';
import RecordsSearch from '../components/RecordsSearch';

function Administrator() {
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