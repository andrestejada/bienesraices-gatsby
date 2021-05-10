import React from 'react'
import  Layout  from './Layout'
import {graphql} from 'gatsby';
import Iconos from './Iconos';
import './propiedad.scss'
import Img from "gatsby-image"



export const query = graphql`
query($id: String!) {
    allStrapiPropiedades( filter: { id: { eq: $id } }) {
        nodes {
            nombre
            descripcion
            wc
            estacionamiento
            habitaciones
            precio
            agentes {
                nombre
                telefono
                email
            }
            imagen {
                sharp: childImageSharp {
                    fluid ( maxWidth: 700) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    }
}
 `

const Propiedad = ({data:{allStrapiPropiedades:{nodes}}}) => {

    const {nombre,
        descripcion,
        wc,
        estacionamiento,
        habitaciones,
        precio,
        agentes,
        imagen,} = nodes[0]

        console.log(imagen)

    return (
        <Layout>
            <h1>{nombre}</h1>
            <div className='contenido-propiedad' >    
                <main>
                    <Img
                        fluid={imagen.sharp.fluid}
                    />  
                    <p>{descripcion}</p>
                </main>
                <aside>
                    <p className="precio">$ {precio}</p>
                    <Iconos 
                        wc={wc}
                        estacionamiento={estacionamiento}
                        habitaciones={habitaciones}
                    />

                    <div className="agente">
                        <h2>Vendedor:</h2>
                        <p>{agentes.nombre}</p>
                        <p>Tel: {agentes.telefono}</p>
                        <p>Email: {agentes.email}</p>
                    </div>
                </aside>
            </div>
        </Layout>
    )
}

export default Propiedad
