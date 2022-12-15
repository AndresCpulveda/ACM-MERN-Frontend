import {useEffect} from 'react'

import RecordsList from '../components/RecordsList';
import RecordsSearch from '../components/RecordsSearch';

function Administrator() {
  return (
    <>
      <div className='col-span-1'>
        <RecordsSearch />
      </div>
      <div className='col-span-2 bg-gray-100'>
        <RecordsList />
      </div>
    </>
  )
}

export default Administrator