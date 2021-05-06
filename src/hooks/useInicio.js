import {useStaticQuery,graphql} from 'gatsby'

const useInicio = () => {

const resultado = useStaticQuery(graphql`
query {
    allStrapiPaginas( filter: { nombre: { eq: "Inicio" } } ){
    nodes {
        id
        nombre
        contenido
        imagen {
          url
        }
    }
}
}`)
return resultado.allStrapiPaginas.nodes.map( inicio=>({
  nombre: inicio.nombre,
  contenido: inicio.contenido,
  imagen: inicio.imagen[0].url
}) )
    
}
 
export default useInicio;