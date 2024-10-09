import { Pill } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='bg-red-600  text-stone-50 border-t-4 border-red-800 shadow-lg'>
            <div className='container mx-auto p-4 flex justify-center items-center'>
                <Link to="/home" className='flex items-center'>
                    <Pill size={42} color="#f9f1f1" weight="fill" />
                    <h1 className='text-3xl font-bold italic'>
                        FARMAZIL
                    </h1>
                    <p className='ml-4'>Generation Brazil 2024</p>
                </Link>
            </div>
        </footer>
    )
}

export default Footer