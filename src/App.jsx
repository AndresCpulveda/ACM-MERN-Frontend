import {BrowserRouter, Route, Routes} from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import ForgotPassword from './pages/ForgotPassword'
import Login from './pages/Login'
import Register from './pages/Register'
import RestorePassword from './pages/RestorePassword'
import Confirm from './pages/Confirm'
import AdminLayout from './layouts/AdminLayout'
import Administrator from './pages/Administrator'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout/>}>
            <Route index element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='confirm/:token' element={<Confirm/>}/>
            <Route path='forgot-password' element={<ForgotPassword/>}/>
            <Route path='forgot-password/:token' element={<RestorePassword/>}/>
          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
            <Route>
              <Route index element={<Administrator/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
