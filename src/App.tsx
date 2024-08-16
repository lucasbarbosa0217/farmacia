import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <ToastContainer />
      <BrowserRouter>
      <Navbar/>

      <div className='flex flex-col items-center flex-grow bg-stone-200 p-4'>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
      </div>

      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App