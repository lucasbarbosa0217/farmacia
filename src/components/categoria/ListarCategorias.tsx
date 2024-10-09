import  { useEffect, useState } from 'react'
import CardCategoria from './CategoriaCard'
import Categoria from '../../model/Categoria';
import { buscar } from '../../service/service';
import { toastAlerta } from '../../util/toastAlert';
import { ColorRing} from 'react-loader-spinner';
import { useParams } from 'react-router-dom';




function ListarCategorias() {

  const { nome } = useParams<{ nome: string }>();

  const [isLoading, setIsLoading] = useState(true)


  const [categorias, setCategorias] = useState<Categoria[]>([]);
  async function buscarCateogorias() {
    setIsLoading(true)
    try {
      if(nome){
        await buscar(`/categorias/nome/${nome}`, setCategorias)
        setIsLoading(false)

      }else{
        await buscar('/categorias', setCategorias)
        setIsLoading(false)
      }
    }
    catch (error: any) {

      toastAlerta('Erro ao buscar categorias', 'error')

    }
  }


  useEffect(() => {
    if(!nome && categorias.length ){return}
    buscarCateogorias();
  }, [categorias.length, nome]);

  return (
    <>
      {isLoading ? (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#ef4444', '#ef4444', '#ef4444', '#ef4444', '#ef4444']}
        />
      ) : categorias.length === 0 ? (
        <div>Sem resultados.</div>
      ) : (
        <div className='flex flex-wrap w-full gap-4 container self-center'>
          {categorias.map((categoria) => (
            <CardCategoria categoria={categoria} key={categoria.id} />
          ))}
        </div>
      )}
    </>
  );

}

export default ListarCategorias