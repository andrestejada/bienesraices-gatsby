import {useStaticQuery,graphql} from 'gatsby'

const usePropiedades = () => {
    const {propiedades}= useStaticQuery(graphql`
    query{
        allStrapiPropiedades{
            nodes{
                id
          nombre
          habitaciones
          estacionamiento
          wc
          descripcion
          precio
          categoria{
                    nombre
          }
          agentes{
                    nombre
            telefono
            email
          }
          imagen {
            sharp: childImageSharp {
                fluid( maxWidth: 600, maxHeight: 400 ) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        }
      }
    }`)

   console.log(propiedades)
}
export default usePropiedades;