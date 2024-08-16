import React, { useEffect, useState } from 'react'
import CardCategoria from './cardCategoria'
import Categoria from '../../model/Categoria';
import { buscar } from '../../service/service';
import { toastAlerta } from '../../util/toastAlert';
import { ColorRing, DNA } from 'react-loader-spinner';

function ListarCategorias() {

  const [categorias, setCategorias] = useState<Categoria[]>([]);




  async function buscarCateogorias() {
    try {
      await buscar('/categorias', setCategorias)
    }
    catch (error: any) {

      toastAlerta('Erro ao buscar cateogorias', 'error')

    }
  }


  useEffect(() => {
    buscarCateogorias();
  }, [categorias.length]);

  return (
    categorias.length < 1 ? (
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#ef4444', '#ef4444', '#ef4444', '#ef4444', '#ef4444']}
      />
    ) : (
      <div className='flex flex-wrap w-full gap-4 container self-center'>
        {categorias.map((categoria) => (
          <CardCategoria categoria={categoria} key={categoria.id} />
        ))}
      </div>
    )
  );
}

export default ListarCategorias