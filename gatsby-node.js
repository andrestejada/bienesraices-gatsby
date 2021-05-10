const urlSlug = require('url-slug')

exports.createPages= async({actions,graphql,reporter})=> {

    const respuesta = await graphql(`
    query{
        allStrapiPropiedades{
            nodes{
              id
              nombre
        }
      }
  
  	allStrapiPaginas{
			nodes{
				id
        nombre
      }
    }
    }
    `);

    if(respuesta.errors){
        reporter.panic('No Hubo resultados',respuesta.errors)
    }

    const {createPage} = actions

    const propiedades = respuesta.data.allStrapiPropiedades.nodes
    const paginas = respuesta.data.allStrapiPaginas.nodes

    propiedades.forEach( propiedad=>{
         createPage({
             path: urlSlug(propiedad.nombre),
             component: require.resolve('./src/components/Propiedad.js'),
             context:{
                 id: propiedad.id
             }
         })
    })

    paginas.forEach( pagina=>{
         createPage({
             path: urlSlug(pagina.nombre),
             component: require.resolve('./src/components/Paginas.js'),
             context:{
                 id: pagina.id
             }
         })
    })


}

