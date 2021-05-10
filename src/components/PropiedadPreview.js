import { Link } from 'gatsby';
import React from 'react'
import Iconos from './Iconos'
import './propiedadesPreview.scss'
import urlSlug from 'url-slug'
import Img from "gatsby-image"


const PropiedadPreview = ({propiedad}) => {
    const {
        nombre,
        precio,
        estacionamiento,
        wc,
        habitaciones,
        imagen        
    } = propiedad;

    return (
       <div className='card' >
            <div className='contenido' >
            <Img
                fluid={imagen.sharp.fluid}
            />
                <h3>{nombre}</h3>
                <p className='precio'>${precio}</p>
                <Iconos
                    estacionamiento={estacionamiento}
                    wc={wc}
                    habitaciones={habitaciones}
                />

                <Link
                    className='boton-card'
                    to={ urlSlug(nombre) }
                >Visitar Propiedad</Link>
            </div>
       </div>
    )
}

export default PropiedadPreview
