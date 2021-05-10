import {useStaticQuery,graphql} from 'gatsby'

const usePropiedades = () => {
    const datos = useStaticQuery(graphql`
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

   return datos.allStrapiPropiedades.nodes.map( propiedad=>({
      id: propiedad.id,
      nombre: propiedad.nombre,
      descripcion: propiedad.descripcion,
      habitaciones: propiedad.habitaciones,
      wc: propiedad.wc,
      estacionamiento: propiedad.estacionamiento,
      precio: propiedad.precio,
      categoria: propiedad.categoria,
      imagen: propiedad.imagen,
      agentes: propiedad.agentes,
   }))
}
export default usePropiedades;