import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import sendAxios from '../../config/sendAxios'

import Alert from '../components/Alert'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()

    if([email, password].includes('')){
      setAlert({msg: 'Ambos campos son obligatorios', error: true})
      setTimeout(() => {
        setAlert({})
      }, 4000);
      return
    }
    try {
      const {data} = await sendAxios.post('administrators/', {email, password})
      localStorage.setItem('token', data.token)
      setAlert({msg: 'Autenticado exitosamente'})
      setTimeout(() => {
        navigate('/admin')
      }, 2000);
    } catch (error) {
      setAlert({msg: error.response.data.msg, error: true})
    }
  }
  return (
    <>
      <div>
        <h1>Inicia sesion y administra tus clientes</h1>
      </div>
      <div className='flex flex-col justify-center shadow-lg p-8 rounded-lg bg-white'>
        <h1 className='text-3xl text-lime-700 font-black text-center uppercase mb-8 mt-4'>inicia sesion</h1>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label className='capitalize text-lime-900 text-lg font-bold'>usuario</label>
            <input
              type='email'
              value={email}
              onChange={e => {setEmail(e.target.value)}}
              className='bg-gray-200 my-1 rounded p-2'
              placeholder='Tu email'
            ></input>
          </div>
          <div className='flex flex-col mt-4'>
            <label className='capitalize text-lime-900 text-lg font-bold'>contraseña</label>
            <input
              type='password'
              value={password}
              onChange={e => {setPassword(e.target.value)}}
              className='bg-gray-200 my-1 rounded p-2'
              placeholder='Tu contraseña'
            ></input>
          </div>
          <input
            type='submit'
            value='entrar'
            className='bg-orange-500 border-2 border-orange-500 w-full mt-6 py-1 font-bold rounded text-white uppercase cursor-pointer hover:bg-white hover:text-orange-500 transition-all' 
          ></input>
          {alert.msg ? <Alert alert={alert} /> : null}
        </form>
        <nav className='flex flex-col md:flex-row justify-between mt-8 mb-2'>
          <p className='text-gray-400 text-sm'>Si aun no tienes una cuenta <Link to='/register' className='text-gray-500 hover:text-gray-600 font-bold transition-all'>Registrate aquí</Link></p>
          <Link to='/forgot-password' className='text-gray-400 mt-4 md:mt-0 text-sm hover:text-gray-600 transition-all'>Olvidé mi contraseña</Link>
        </nav>
      </div>
    </>
  )
}

export default Login