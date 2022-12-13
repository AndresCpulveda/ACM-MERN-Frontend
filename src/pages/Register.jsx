import {useState} from 'react'
import { Link } from 'react-router-dom'

import Alert from '../components/Alert'
import sendAxios from '../../config/sendAxios'

function Register() {

  const [inputs, setInputs] = useState({})
  const [alert, setAlert] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(Object.values(inputs).includes('') || Object.values(inputs).length === 0){
      setAlert({msg: 'Llena todos los campos',error: true,})

      setTimeout(() => {
        setAlert({})
      }, 3000);
      return
    }
    if(inputs.password !== inputs.passwordRepeat) {
      setAlert({msg: 'Las contraseñas no coinciden', error: true,})

      setTimeout(() => {
        setAlert({})
      }, 3000);
      return
    }
    if(inputs.password.length < 6) {
      setAlert({msg: 'Elige una contraseña de 6 digitos minimo', error: true,})
  
      setTimeout(() => {
        setAlert({})
      }, 3000);
      return
    }

    const request = {
      email: inputs.email,
      name: inputs.name,
      password: inputs.password,
    }

    try {
      await sendAxios.post('administrators/register', request)
      setAlert({msg: 'Usuario creado, email de confirmación enviado'})
      setTimeout(() => {
        setAlert({})
      }, 5000);
    } catch (error) {
      setAlert({msg: error.response.data, error: true})
      setTimeout(() => {
        setAlert({})
      }, 3000);

    }

  }

  return (
    <>
      <div>Administra tus Clientes</div>
      <div className='shadow-lg bg-white p-8 rounded-lg'>
        <h1 className='text-3xl uppercase text-center mb-8 text-lime-700 font-black'>Registro</h1>

        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-2'>
            <label className='text-lime-900 font-bold text-lg'>Nombre</label>
            <input
              name='name'
              value={inputs.name || ''}
              onChange={e => setInputs({
                ...inputs,
                [e.target.name] : e.target.value
              })}
              className='bg-gray-200 rounded p-2 mb-6'
              placeholder='Tu nombre'
            ></input>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-lime-900 font-bold text-lg'>Email</label>
            <input
              name='email'
              value={inputs.email || ''}
              onChange={e => setInputs({
                ...inputs,
                [e.target.name] : e.target.value
              })}
              type='email'
              className='bg-gray-200 rounded p-2 mb-6'
              placeholder='Tu correo electrónico'
            ></input>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-lime-900 font-bold text-lg'>Contraseña</label>
            <input
              name='password'
              value={inputs.password || ''}
              onChange={e => setInputs({
                ...inputs,
                [e.target.name] : e.target.value
              })}
              type='password'
              className='bg-gray-200 rounded p-2 mb-6'
              placeholder='Crea una contraseña'
            ></input>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-lime-900 font-bold text-lg'>Repite la contraseña</label>
            <input
              name='passwordRepeat'
              value={inputs.passwordRepeat || ''}
              onChange={e => setInputs({
                ...inputs,
                [e.target.name] : e.target.value
              })}
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
          {alert.msg ? <Alert alert={alert}/> : null}
        </form>
        <nav className='flex justify-between mt-8'>
          <p className='text-gray-500 text-sm'>Ya tienes una cuenta? <Link to='/' className='font-bold text-gray-500 hover:text-gray-700'>Inicia Sesion</Link></p>
          <Link to='/forgot-password' className='text-sm text-gray-500 hover:text-gray-700'>Olividé mi contraseña</Link>
        </nav>
      </div>
    </>
  )
}

export default Register