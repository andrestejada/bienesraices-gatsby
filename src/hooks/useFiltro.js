import { graphql,useStaticQuery } from 'gatsby'
import React , {useState} from 'react'
import './useFiltro.scss'

const useFiltro = () => {

    const [categoria, setCategoria] = useState('')

    const resultado = useStaticQuery(graphql`
    query{
        allStrapiCategorias{
                nodes{
                    id
                    nombre
          }
      }
    }
    `)

    const categorias = resultado.allStrapiCategorias.nodes

    const filtroUI =()=>(
        <form className='form-filtro' >
            <select 
                className='select-filtro'
                onChange={e=> setCategoria(e.target.value) }
                value={categoria}
            >
                <option value="" >--Filtral---</option>
                {
                    categorias.map( opcion=>(
                        <option 
                            key={opcion.id}
                            value={opcion.nombre}                          
                        >{opcion.nombre}</option>
                    ))
                }
            </select>
        </form>
    )

    return{
        filtroUI,
        categoria
    }
}

export default useFiltro
