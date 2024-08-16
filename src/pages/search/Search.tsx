import React from 'react'
import { useParams } from 'react-router-dom';
import ListarCategorias from '../../components/categoria/ListarCategorias';

function Search() {
    const { nome } = useParams<{ nome: string }>();

  return (
    <>
    <div className='container'>
              <h1 className='text-2xl'>Resultados de pesquisa para "{nome}"</h1>
              <h2 className='text-2xl my-4 font-bold'>Categorias:</h2>
    </div>
   
    <ListarCategorias/>
    </>
  )
}

export default Search