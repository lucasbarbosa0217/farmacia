import  { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../model/Categoria';
import { atualizar, buscar, cadastrar } from '../../service/service';
import { toastAlerta } from '../../util/toastAlert';
import { FloppyDisk } from '@phosphor-icons/react';
import { BallTriangle } from 'react-loader-spinner';

function FormularioCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    let navegar = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [isLoading, setIsLoading] = useState(false)

    function retornar() {
        navegar("/categorias");
    }

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria);
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            setIsLoading(true)
            if (id !== undefined) {
                await atualizar(`/categorias`, categoria, setCategoria);
                toastAlerta('Categoria atualizada com succecsso', 'success');
                setIsLoading(false)
            } else {
                await cadastrar(`/categorias`, categoria, setCategoria);
                toastAlerta('Categoria cadastrada com succecsso', 'success');
                setIsLoading(false)
            }
            retornar();
        } catch (error: any) {
            toastAlerta('Erro ao salvar categoria', 'error');
            setIsLoading(false)
        }
    }

    return (
        <div className="flex flex-col max-w-[30rem] w-full   bg-stone-100 rounded-2xl shadow-lg overflow-hidden">


            <h1 className="text-3xl  text-center my-8 mx-2">
                {id === undefined ? 'Cadastre uma nova Categoria' : 'Editar Categoria'}
            </h1>

            <form className="flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className='flex flex-col gap-2 px-4'>
                    <div className='flex flex-col'>
                        <label htmlFor="nome">Nome da Categoria:</label>
                        <input
                            type="text"
                            id="nome"
                            placeholder="Nome"
                            name='nome'
                            className="bg-light-background2 dark:bg-dark-background2 p-2"
                            value={categoria.nome}
                            onChange={atualizarEstado}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="descricao">Descrição da Categoria:</label>
                        <input
                            type="text"
                            id="descricao"
                            placeholder="Descrição"
                            name='descricao'
                            className="bg-light-background2 dark:bg-dark-background2 p-2"
                            value={categoria.descricao}
                            onChange={atualizarEstado}
                        />
                    </div>
                </div>

                <button
                    disabled={isLoading}
                    className={
                        "rounded text-green-600 py-2 flex justify-center items-center gap-2 border-t  hover:bg-green-600 hover:text-stone-50" +
                        `${isLoading ? ' bg-stone-700 hover:bg-stone-700' : ''}`
                    }
                    type="submit"
                >
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
                            <FloppyDisk />
                            {id === undefined ? 'Cadastrar' : 'Editar'}
                        </>

                    }

                </button>
            </form>
        </div>
    );
}

export default FormularioCategoria;
