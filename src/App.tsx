import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import ListarCategorias from './components/categoria/ListarCategorias'
import FormularioCategoria from './components/categoria/FormularioCategoria'
import 'react-toastify/dist/ReactToastify.css';
import DeletarCategoria from './components/categoria/DeletarCategoria'


function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />

        <div className='flex flex-col items-center flex-grow bg-stone-200 p-4'>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/categorias" element={<ListarCategorias />}></Route>
            <Route path="/categorias/editar/:id" element={<FormularioCategoria />}></Route>
            <Route path="/categorias/criar" element={<FormularioCategoria />}></Route>
            <Route path="/categorias/deletar/:id" element={<DeletarCategoria />}></Route>

          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App