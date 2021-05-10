import React from 'react'
import  Layout  from './Layout'
import {graphql} from 'gatsby';
import Img from "gatsby-image"
import './Paginas.scss'
import ListadoPropiedades from './ListadoPropiedades';



export const query = graphql`
query($id:String!) {
    allStrapiPaginas(filter: { id: { eq: $id}}) {
        nodes {
            nombre
            contenido 
            imagen {
                sharp: childImageSharp {
                    fluid(maxWidth: 1200) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    }
}
`

const Paginas = ({data:{allStrapiPaginas:{nodes}}}) => {

    const {nombre,contenido,imagen,} = nodes[0]
    return (
        <Layout>
                <main className='contenedor' >
                <h1>{nombre}</h1>
                <div className='contenido-pagina' >
                    <Img
                        fluid={imagen.sharp.fluid}
                    />  
                    <p>{contenido}</p>
                </div>
                </main>

                {nombre==='Propiedades' && <ListadoPropiedades/>}
        </Layout>
    )
}

export default Paginas
