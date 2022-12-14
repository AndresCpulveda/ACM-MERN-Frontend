import {useState} from 'react'
import { useParams } from 'react-router-dom'
import sendAxios from '../../config/sendAxios'

import Alert from '../components/Alert'

function RestorePassword() {

  const {token} = useParams()

  const [password, setPassword] = useState('')
  const [repeated, setRepeated] = useState('')
  const [alert, setAlert] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password === '' || repeated === '') {
      setAlert({msg: 'Llena ambos campos', error: true})
      setTimeout(() => {
        setAlert({})
      }, 3000);
      return
    }
    if(password.length < 6) {
      setAlert({msg: 'Contraseña debe tener minimo 6 digitos', error: true})
      setTimeout(() => {
        setAlert({})
      }, 3000);
      return
    }
    if(password !== repeated) {
      setAlert({msg: 'Contraseñas no coinciden', error: true})
      setTimeout(() => {
        setAlert({})
      }, 3000);
      return
    }
    
    try {
      const {data} = await sendAxios.post(`administrators/forgot-password/${token}`, {password})
      setAlert({msg: data.msg})
      setTimeout(() => {
        setAlert({})
      }, 3000);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <div>RestorePassword</div>
    <div className='shadow-lg bg-white p-8 rounded-lg'>
      <h1 className='text-lime-700 font-black text-3xl text-center uppercase mb-8'>Restablece <span>tu contraseña</span></h1>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
          <label className='text-lime-900 font-bold text-lg'>Nueva contraseña</label>
          <input
            value={password}
            onChange={e => {setPassword(e.target.value)}}
            type='password'
            placeholder='Elige tu nueva contraseña'
            className='bg-gray-200 rounded p-2'
          ></input>
        </div>
        <div className='flex flex-col gap-2 mt-6'>
          <label className='text-lime-800 font-bold text-lg'>Repite la contraseña</label>
          <input
            value={repeated}
            onChange={e => {setRepeated(e.target.value)}}
            type='password'
            placeholder='Repite la contraseña elegida'
            className='bg-gray-200 rounded p-2'
          ></input>
        </div>
        <input
          type='submit'
          value='restablecer'
          className='border-2 border-orange-500 bg-orange-500 hover:bg-white text-white hover:text-orange-500 font-bold uppercase w-full mt-8 rounded p-2 cursor-pointer transition-all'
        ></input>
        {alert.msg ? <Alert alert={alert}/> : null}
      </form>
    </div>
    </>
  )
}

export default RestorePassword