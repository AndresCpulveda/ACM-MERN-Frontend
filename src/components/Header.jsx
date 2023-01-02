import {useState} from 'react'
import { Link } from 'react-router-dom'

import useAuth from '../hooks/useAuth'

function Header() {
  const {logOut} = useAuth();
  const [showMenu, setShowMenu] = useState(false)
  return (
    // <nav className='flex justify-between p-6 bg-white shadow-lg fixed w-full'>
    //   <h1>Imagen</h1>
    //   <ul className='flex gap-8'>
    //     <li className='text-lime-700 hover:text-lime-800 uppercase font-bold cursor-pointer'><Link to='/admin' >trabajos</Link></li>
    //     <li className='text-lime-700 hover:text-lime-800 uppercase font-bold cursor-pointer'><Link to='profile'>perfil</Link></li>
    //     <li className='text-lime-700 hover:text-lime-800 uppercase font-bold cursor-pointer' onClick={() => {confirm('¿Deseas cerrar sesion y salir?') ? logOut() : null}}>cerrar sesion</li>
    //   </ul>
    // </nav>
    <nav className='flex justify-between py-6 bg-white shadow-lg fixed w-full'>
      <h1 className='pl-6'>Imagen</h1>
      <ul onClick={() => setShowMenu(!showMenu)} className={`flex flex-col justify-end md:flex-row gap-2 md:gap-12 absolute md:static text-center w-full bg-white p-4 ${showMenu ? '' : 'hidden md:flex'}`}>
        <li className='text-lime-700 hover:text-lime-800 uppercase font-bold cursor-pointer'><Link to='/admin' >trabajos</Link></li>
        <li className='text-lime-700 hover:text-lime-800 uppercase font-bold cursor-pointer'><Link to='profile'>perfil</Link></li>
        <li className='text-lime-700 hover:text-lime-800 uppercase font-bold cursor-pointer' onClick={() => {confirm('¿Deseas cerrar sesion y salir?') ? logOut() : null}}>cerrar sesion</li>
      </ul>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-4 cursor-pointer md:hidden"
        onClick={() => setShowMenu(!showMenu)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

    </nav>
  )
}

export default Header