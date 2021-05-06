import BackgroundImage from "gatsby-background-image"
import * as React from "react"
import Layout from "../components/Layout"
import useInicio from "../hooks/useInicio"
import  Encuentra from '../components/Encuentra'
import './index.scss'
import ListadoPropiedades from "../components/ListadoPropiedades"
import usePropiedades from "../hooks/usePropiedades"

const IndexPage = () => {
  
  const inicio = useInicio()  
  const { nombre , contenido , imagen}=inicio[0]

  const propiedades = usePropiedades()

  return(
    <Layout>

      <BackgroundImage
        Tag='section'
        className='background-image'
        fluid={imagen}
      >
        <div className='imagenbg' >
          <h1 className='titulo' >Venta de casa y departamentos de lujo</h1>
        </div>
      </BackgroundImage>

      <main>
        <div className='div-index' >
          <h1>{nombre}</h1>
          <p className='p-index' >{contenido}</p>
        </div>
      </main>
      <Encuentra/>

      <ListadoPropiedades/>
    </Layout>
  )
 
}


export default IndexPage
