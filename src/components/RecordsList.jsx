import React from 'react'

import useRecords from '../hooks/useRecords'
import Record from '../components/Record';

function RecordsList() {
  const {lastRecords, amount, setAmount} = useRecords()
  return (
    <>
      <label>Mostrando los ultimos: 
        <input
          type='number'
          className='p-1 rounded'
          value={amount}
          onChange={e => {
            if(e.target.value !== '0') {
              console.log(e.target.value)
              setAmount(e.target.value)
            }
          }}

        ></input> trabajos</label>
      <ul className='my-8 overflow-scroll h-[28rem]'>
        {lastRecords.map(record => (<Record record={record} key={record._id}/>))}
      </ul>
    </>
  )
}

export default RecordsList