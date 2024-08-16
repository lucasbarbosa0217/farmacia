import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../model/Categoria';
import { buscar, deletar } from '../../service/service';
import { toastAlerta } from '../../util/toastAlert';
import { Eraser, FloppyDisk, Pencil, SkipBack } from '@phosphor-icons/react';
import { BallTriangle } from 'react-loader-spinner';

function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const { id } = useParams<{ id: string }>();
    let navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false)

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error: any) {
            toastAlerta('Erro ao buscar categoria', 'error');
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function retornar() {
        navigate("/categorias");
    }

    async function deletarCategoria() {
        try {
            setIsLoading(true)
            await deletar(`/categorias/${id}`);
            toastAlerta('Categoria apagada com sucesso', 'success');
            setIsLoading(false)

        } catch (error: any) {
            toastAlerta('Erro ao apagar categoria', 'error');
            setIsLoading(false)

        }

        retornar();
    }

    return (
        <div className="flex flex-col max-w-[30rem] w-full p-4 bg-stone-100 rounded-2xl shadow-lg overflow-hidden" >


            <h1 className="text-4xl text-center my-8 mx-2" > Deletar Categoria </h1>
            < p className="text-center mb-4" >
                Você tem certeza de que deseja apagar a categoria a seguir?
                Todos os produtos relacionadas a essa categoria serão
                < span className="font-black text-red-500" > apagadas para sempre.</span>
            </p>

            <div className='flex flex-col bg-stone-100 rounder-lg shadow-lg rounded-md overflow-hidden border'>

                <div className='p-4 w-full border-b'>
                    <p className='font-medium text-2xl'>{categoria.nome}</p>
                    <p className=''>{categoria.descricao}</p>
                </div>

                <div className='flex w-full'>

                    <button onClick={retornar} className="flex-grow items-center p-2 flex justify-center  text-blue-500 hover:bg-blue-500 hover:text-stone-50">

                        <SkipBack />
                        Cancelar
                    </button>

                    <button onClick={deletarCategoria}
                        disabled={isLoading}
                        className="flex-grow items-center p-2 flex justify-center  text-red-500 hover:bg-red-500 hover:text-stone-50">

                        {isLoading ?
                            <BallTriangle
                                height={24}
                                width={24}
                                radius={5}
                                color="#ffffff"
                                ariaLabel="ball-triangle-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                            :

                            <>
                                <Eraser />
                                Apagar
                            </>

                        }

                    </button>

                </div>

            </div>
        </div>
    );

}

export default DeletarCategoria;
