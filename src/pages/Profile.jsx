import React from 'react'

function Profile() {
  return (
    <>
      <div className='flex flex-col container lg:w-1/2 mx-auto items-center bg-white shadow-lg rounded-lg p-8'>
        <h1 className='text-4xl font-bold uppercase text-lime-800 my-8'>perfil</h1>
        <form>
          <div className='mb-4'>
            <label className='text-orange-700 font-bold text-xl'>Nombre: </label>
            <input
              // onChange={}
              // value={}
              className='bg-gray-200 rounded px-2'
            ></input>
          </div>
          <div className='mb-4'>
            <label className='text-orange-700 font-bold text-xl'>Email: </label>
            <input
              // onChange={}
              // value={}
              className='bg-gray-200 rounded px-2'
            ></input>
          </div>
          <input
            type='submit'
            value='cambiar'
            className='border-2 border-orange-700 bg-orange-700 hover:bg-white text-white hover:text-orange-700 uppercase font-bold rounded px-4 cursor-pointer transition-all w-full mt-4'
          ></input>
        </form>
      </div>
    </>
  )
}

export default Profile