import { Pill } from '@phosphor-icons/react'
import React, { ChangeEvent, useRef, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { toastAlerta } from '../../util/toastAlert';
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';

function Navbar() {



    const { nome } = useParams<{ nome: string }>();

    let navegar = useNavigate();

    const [pesquisa, setPesquisa] = useState(nome || "")

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setPesquisa(e.target.value)
    }

    function pesquisar(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        if(pesquisa){
            toastAlerta("Pesquisando por " + pesquisa, "info")
            navegar(`/pesquisar/${pesquisa}`)
        }
          
    }

    return (
        <header className='bg-red-600  text-stone-50 border-b-4 border-red-800 shadow-lg'>
            <div className='container mx-auto p-4 flex justify-between items-center  flex-wrap gap-y-4'>
                <Link to="/home" className='flex items-center'>
                    <Pill size={42} color="#f9f1f1" weight="fill" />
                    <h1 className='text-3xl font-bold italic'>
                        FARMAZIL
                    </h1>
                </Link>

                <div>
                    <form onSubmit={pesquisar} className='flex items-center border rounded'>
                        <input type="search"  className='p-2 rounded text-black' onChange={atualizarEstado} value={pesquisa} ></input>
                        <button className='px-2'><MagnifyingGlass size={24}/></button>
                    </form>
                  
                </div>

                <div>
                    <ul className='flex gap-4'>
                        <Link to="/categorias">Categorias</Link>
                        <Link to="/categorias/criar">Criar Categorias</Link>

                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar