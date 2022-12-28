import React from 'react'

import useRecords from '../hooks/useRecords'
import Record from '../components/Record';

function RecordsList() {
  const {getLastRecords, lastRecords, amount, setAmount} = useRecords()
  return (
    <>
      <button
        onClick={getLastRecords}
        className='border border-orange-700 bg-orange-700 hover:bg-white hover:text-orange-700 text-white rounded font-bold px-1'
      >Mostrar</button><label> los ultimos: 
        <input
          type='number'
          className='p-1 rounded w-[55px]'
          value={amount}
          onChange={e => {
            if(e.target.value !== '0') {
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