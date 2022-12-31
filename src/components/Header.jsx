import React from 'react'
import { Link } from 'react-router-dom'

import useAuth from '../hooks/useAuth'

function Header() {
  const {logOut} = useAuth();
  return (
    <nav className='flex justify-between p-6 bg-white shadow-lg fixed w-full'>
      <h1>Imagen</h1>
      <ul className='flex gap-8'>
        <li className='text-lime-700 hover:text-lime-800 uppercase font-bold cursor-pointer'><Link to='/admin' >trabajos</Link></li>
        <li className='text-lime-700 hover:text-lime-800 uppercase font-bold cursor-pointer'><Link to='profile'>perfil</Link></li>
        <li className='text-lime-700 hover:text-lime-800 uppercase font-bold cursor-pointer' onClick={() => {confirm('¿Deseas cerrar sesion y salir?') ? logOut() : null}}>cerrar sesion</li>
      </ul>
    </nav>
  )
}

export default Header