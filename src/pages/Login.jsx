import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <div>
        <h1>Inicia sesion y administra tus clientes</h1>
      </div>
      <div className='flex flex-col justify-center shadow-lg p-8 rounded-xl bg-white'>
        <h1 className='text-4xl text-lime-800 font-bold text-center uppercase mb-8 mt-4'>inicia sesion</h1>
        <form>
          <div className='flex flex-col'>
            <label className='capitalize text-lime-900 text-lg font-bold'>usuario</label>
            <input className='bg-gray-200 my-1 rounded p-2' placeholder='Tu email'></input>
          </div>
          <div className='flex flex-col mt-4'>
            <label className='capitalize text-lime-900 text-lg font-bold'>contraseña</label>
            <input className='bg-gray-200 my-1 rounded p-2' placeholder='Tu contraseña'></input>
          </div>
          <input
            type='submit'
            value='entrar'
            className='bg-orange-500 border-2 border-orange-500 w-full mt-6 py-1 font-bold rounded text-white uppercase cursor-pointer hover:bg-white hover:text-orange-500 transition-all' 
          ></input>
        </form>
        <nav className='flex flex-col md:flex-row justify-between mt-8 mb-2'>
          <p className='text-gray-400 text-sm'>Si aun no tienes una cuenta <Link className='text-gray-500 hover:text-gray-600 font-bold transition-all'>Registrate aquí</Link></p>
          <Link className='text-gray-400 mt-4 md:mt-0 text-sm hover:text-gray-600 transition-all'>Olvidé mi contraseña</Link>
        </nav>
      </div>
    </>
  )
}

export default Login