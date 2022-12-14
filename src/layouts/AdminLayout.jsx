import { Outlet, Navigate } from 'react-router-dom'
import Spinner from '../components/Spinner';

import useAuth from '../hooks/useAuth'

function AdminLayout() {
  const {auth, loading} = useAuth();

  if(loading) return <Spinner />

  return (
    <>
      {auth.id ? (
        <main className='container mx-auto grid md:grid-cols-2 p-12 gap-12 items-center'>
          <Outlet />
        </main>
      ) : <Navigate to='/'/>}
    </>
  )
}

export default AdminLayout