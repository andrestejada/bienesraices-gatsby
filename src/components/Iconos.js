import { graphql, useStaticQuery } from 'gatsby'
import React from 'react';
import './Iconos.scss'

const Iconos = ({estacionamiento,wc,habitaciones}) => {


    const {iconos}=useStaticQuery(graphql`
    query{
        iconos:allFile(filter:{relativeDirectory:{eq:"iconos"}}){
                edges{
                    node{
                        id
                        publicURL
            }
          }
      }
    }
    `)

    const imagenesIconos = iconos.edges

    return (
        <ul className='listado-iconos' >
           <li>
               <img src={imagenesIconos[0].node.publicURL} alt='iconos' />
               <p>{habitaciones}</p>
           </li>
           <li>
               <img src={imagenesIconos[1].node.publicURL} alt='iconos' />
               <p>{estacionamiento}</p>
           </li>
           <li>
               <img src={imagenesIconos[2].node.publicURL} alt='iconos' />
               <p>{wc}</p>
           </li>
        </ul>
    )
}

export default Iconos
