import {useState} from 'react'
import { Link } from 'react-router-dom'

import Alert from '../components/Alert'
import sendAxios from '../../config/sendAxios'

function ForgotPassword() {

  const [email, setEmail] = useState('')
  const [alert, setAlert] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(email.length < 7) {
      setAlert({msg: 'Ingresa un correo válido', error: true})
      setTimeout(() => {
        setAlert({})
      }, 3000);
      return
    }

    try {
      const {data} = await sendAxios.post('administrators/forgot-password/', {email})
      setAlert({msg: data.msg})
    } catch (error) {
      setAlert({msg: error.response.data.msg, error: true})
      setTimeout(() => {
        setAlert({})
      }, 3000);
    }
  }

  return (
    <>
      <div>Haz olvidado la contraseña</div>
      <div className='flex flex-col gap-8 shadow-lg bg-white p-8 rounded-lg'>
        <h1 className='uppercase text-lime-700 text-3xl font-black mb-4'>Restablece <span className='text-orange-500'>tu contraseña</span></h1>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-2'>
            <label className='text-lime-900 font-bold text-lg'>Correo Electrónico</label>
            <input
              type='email'
              value={email}
              onChange={e => {setEmail(e.target.value)}}
              className='bg-gray-200 rounded p-2'
              placeholder='Email asociado a tu cuenta'
            ></input>
          </div>
          <input
            type='submit'
            value='enviar'
            className='border-2 border-orange-500 bg-orange-500 hover:bg-white text-white hover:text-orange-500 text-lg font-bold uppercase rounded p-2 my-6 w-full cursor-pointer transition-all'
          ></input>
          {alert.msg ? <Alert alert={alert}/> : null}
        </form>
        <div className='flex justify-between'>
          <p className='text-gray-500 text-sm'>No tienes cuenta? <Link to='/register' className='hover:text-gray-600 font-bold'>Registrate</Link></p>
          <Link to='/' className='text-sm text-gray-500 font-bold hover:text-gray-600'>Iniciar Sesion</Link>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword