import { Pill } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
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
                    <ul>
                        <Link to="/categorias">Categorias</Link>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar