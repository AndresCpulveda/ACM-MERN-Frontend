import React from 'react'

import useRecords from '../hooks/useRecords'

function Record({record}) {
  const {deleteRecord} = useRecords();

  const {client, plate, date, repair, charge} = record;

  const formatDate = (date) => { //Formateamos la fecha para mostrarla en un formato mas legible
    return date.split('T')[0]
  }
  return (
    <li>
      <div className='flex justify-between bg-white shadow-lg rounded-lg p-4 mb-4'>
        <ul>
          <li className='text-orange-700 font-bold'>Cliente: <span className='text-lime-900 font-normal'>{client}</span></li>
          <li className='text-orange-700 font-bold'>Carro: <span className='text-lime-900 font-normal'>{plate}</span></li>
          <li className='text-orange-700 font-bold'>Fecha: <span className='text-lime-900 font-normal'>{formatDate(date)}</span></li>
          <li className='text-orange-700 font-bold'>Arreglo: <span className='text-lime-900 font-normal'>{repair}</span></li>
          <li className='text-orange-700 font-bold'>Precio: <span className='text-lime-900 font-normal'>${charge}</span></li>
        </ul>
        <div className='self-center gap-8 mr-12'>
          <button
            className='border-2 border-lime-700 bg-lime-700 hover:bg-white text-white hover:text-lime-700 text-sm uppercase font-bold rounded p-2 m-6 transition-all'
          >Editar</button>
          <button
            onClick={() => {
              if(confirm('¿Seguro que quieres borrar este registro?')) {
                deleteRecord(record)
              }
            }}
            className='border-2 border-red-700 bg-red-700 hover:bg-white text-white hover:text-red-700 text-sm uppercase font-bold rounded p-2 m-6 transition-all'
          >Borrar</button>
        </div>
      </div>
    </li>
  )
}

export default Record