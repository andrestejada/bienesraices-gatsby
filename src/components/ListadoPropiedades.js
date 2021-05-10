import React, { useEffect, useState } from 'react'
import usePropiedades from '../hooks/usePropiedades'
import PropiedadPreview from './PropiedadPreview';
import useFiltro from "../hooks/useFiltro"
import './ListadoPropiedades.scss'

const ListadoPropiedades = () => {

    const resultado = usePropiedades();

    const [propiedades] = useState(resultado)
    const [filtradas, setfiltrado] = useState([])
    const {filtroUI, categoria}= useFiltro()

   
    useEffect(() => {
        if(categoria){
            const filtro = propiedades.filter( propiedad=> propiedad.categoria.nombre === categoria )
            setfiltrado(filtro)
        }else{
            setfiltrado(propiedades)
        }
    }, [categoria])
    
    return (
        <>
            <h2
             className='h2-listado-p' 
             >Nuestras Propiedades</h2>
            {filtroUI()}
            <ul className='propiedades'>
                {
                    filtradas.map( propiedad=>(
                        <PropiedadPreview
                            key={propiedad.id}
                            propiedad={propiedad}
                        />
                    ))
                }
            </ul>
        </>
    )
}

export default ListadoPropiedades
