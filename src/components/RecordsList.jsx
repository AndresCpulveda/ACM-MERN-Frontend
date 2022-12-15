import React from 'react'

import useRecords from '../hooks/useRecords'
import Record from '../components/Record';

function RecordsList() {
  const {lastRecords} = useRecords()
  return (
    <>
      <ul>
        {lastRecords.map(record => (<Record record={record} key={record._id}/>))}
      </ul>
    </>
  )
}

export default RecordsList