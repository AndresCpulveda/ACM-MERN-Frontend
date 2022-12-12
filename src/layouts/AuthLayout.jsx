import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <main className='container mx-auto grid grid-cols-2 p-12 gap-12 h-screen items-center'>
      <Outlet />
    </main>
  )
}

export default AuthLayout