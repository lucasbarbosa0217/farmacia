import Categoria from '../../model/Categoria'
import { Pencil } from '@phosphor-icons/react';
import { Eraser } from '@phosphor-icons/react/dist/ssr';
import { Link } from 'react-router-dom';

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (

        <div className='flex flex-col bg-stone-100 rounder-lg shadow-lg rounded-md overflow-hidden flex-grow md:max-w-[20rem]'>

            <div className='p-4 w-full border-b flex-grow gap-2 flex flex-col '>
                <p className='font-medium text-2xl max-w-[15rem]'>{categoria.nome}</p>
                <p className=' max-w-[10rem]'>{categoria.descricao}</p>
            </div>

            <div className='flex w-full'>

                <Link to={`/categorias/editar/${categoria.id}`} className="flex-grow p-2 flex justify-center  text-blue-500 hover:bg-blue-500 hover:text-stone-50">
                <button className=' flex items-center justify-center '>
                    <Pencil />
                    Editar
                </button>
                </Link>

                <Link to={`/categorias/deletar/${categoria.id}`} className="flex-grow p-2 flex justify-center  text-red-500 hover:bg-red-500 hover:text-stone-50">
                    <button className=' flex items-center justify-center'>
                        <Eraser />
                        Apagar
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategoria;