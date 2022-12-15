import { Outlet, Navigate } from 'react-router-dom'
import Header from '../components/Header';
import Spinner from '../components/Spinner';

import useAuth from '../hooks/useAuth'

function AdminLayout() {
  const {auth, loading} = useAuth();

  if(loading) return <Spinner />

  return (
    <>
      <Header />
      {auth._id ? (
        <main className='container flex mx-auto px-8 pt-24 gap-12 items-center'>
          <Outlet />
        </main>
      ) : <Navigate to='/'/>}
    </>
  )
}

export default AdminLayout