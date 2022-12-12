import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
      <div>Administra tus Clientes</div>
      <div className='shadow-lg bg-white p-8'>
        <h1 className='text-4xl uppercase text-center mb-8 text-lime-700 font-bold'>Registrate</h1>
        <form>
          <div className='flex flex-col gap-2'>
            <label className='text-lime-900 font-bold text-lg'>Email</label>
            <input
              className='bg-gray-200 rounded p-2 mb-6'
              placeholder='Tu correo electrónico'
            ></input>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-lime-900 font-bold text-lg'>Contraseña</label>
            <input
              type='password'
              className='bg-gray-200 rounded p-2 mb-6'
              placeholder='Crea una contraseña'
            ></input>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-lime-900 font-bold text-lg'>Repite la contraseña</label>
            <input
              type='password'
              className='bg-gray-200 rounded p-2 mb-6'
              placeholder='Repite la contraseña'
            ></input>
          </div>
          <input
            type='submit'
            value='crear cuenta'
            className='border-2 border-orange-500 bg-orange-500 text-white text-lg font-bold uppercase rounded w-full p-2 cursor-pointer transition-all hover:bg-white hover:text-orange-500 mt-4'
          ></input>
        </form>
        <nav className='flex justify-between mt-8'>
          <p className='text-gray-500'>Ya tienes una cuenta? <Link className='font-bold text-gray-500 hover:text-gray-700'>Inicia Sesion</Link></p>
          <Link className='text-gray-500 hover:text-gray-700'>Olividé mi contraseña</Link>
        </nav>
      </div>
    </>
  )
}

export default Register