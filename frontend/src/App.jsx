import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/auth/Layout'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import { useAuthContext } from './context/AuthContext'

function App() {
  const {authUser} = useAuthContext()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />
          <Route path='/login' element={authUser ? <Navigate to='/' /> : <Layout page="login" />} />
          <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Layout page="signup" />} />
          <Route path='*' element={<Layout page="404" />} />
        </Routes>

        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
