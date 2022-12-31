import {BrowserRouter, Route, Routes} from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import ForgotPassword from './pages/ForgotPassword'
import Login from './pages/Login'
import Register from './pages/Register'
import RestorePassword from './pages/RestorePassword'
import Confirm from './pages/Confirm'
import AdminLayout from './layouts/AdminLayout'
import Administrator from './pages/Administrator'
import Profile from './pages/Profile'
import { AuthProvider } from './context/AuthProvider'
import { RecordsProvider } from './context/RecordsProvider'

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <RecordsProvider>            
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
                  <Route path='profile' element={<Profile/>}/>
                </Route>
              </Route>
            </Routes>
          </RecordsProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
