import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import sendAxios from '../../config/sendAxios';

import Alert from '../components/Alert';
import Loading from '../components/Loading';

function Confirm() {

  const {token} = useParams();
  const [confirmed, setConfirmed] = useState(false)
  const [loading, setLoading] = useState(true)
  const [alert, setAlert] = useState({})
  
  useEffect(() => {
    const confirmAccount = async () => {
      try {
        await sendAxios(`http://localhost:4000/api/administrators/confirm/${token}`)  
        setConfirmed(true)
        setLoading(false)
        setAlert({msg: 'Cuenta confirmada exitosamente'})
      } catch (error) {
        console.log(error);
        setAlert({msg: error.response.data.msg, error: true})
        setLoading(false)
      }
    }
    confirmAccount()
  }, [])


  return (
    <>
    <div>Confirm</div>
    <div className='flex flex-col gap-8'>
    {loading ? <Loading /> : <Alert alert={alert}/>}
    {confirmed ? <Link to='/' className='text-gray-500 hover:text-gray-600 font-bold text-center'>Inicia Sesion</Link> : <Link to='/register' className='text-gray-500 hover:text-gray-600 font-bold text-center'>Registrarse </Link>}
    </div>
    </>
  )
}

export default Confirm