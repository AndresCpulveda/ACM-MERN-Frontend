import React from 'react'

function AddRecord() {
  return (
    <>
      <div className='bg-white shadow-lg rounded-lg p-4'>
        <form>
          <div className='flex flex-col mb-4'>
            <label className='text-lime-900 uppercase font-bold'>Cliente</label>
            <input
              // value={}
              onChange={e => {}}
              required
              className='bg-gray-200 rounded px-2 py-1'
            ></input>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-lime-900 uppercase font-bold'>Placa</label>
            <input
              // value={}
              onChange={e => {}}
              required
              className='bg-gray-200 rounded px-2 py-1'
            ></input>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-lime-900 uppercase font-bold'>Fecha</label>
            <input
              value={new Date()}
              onChange={e => {}}
              type='date'
              required
              className='bg-gray-200 rounded px-2 py-1'
            ></input>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-lime-900 uppercase font-bold'>Arreglo</label>
            <input
              // value={}
              onChange={e => {}}
              required
              className='bg-gray-200 rounded px-2 py-1'
            ></input>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-lime-900 uppercase font-bold'>Precio</label>
            <input
              type='number'
              // value={}
              onChange={e => {}}
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
      </div>
    </>
  )
}

export default AddRecord