import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import './encuentra.scss'

const Encuentra = () => {

    const {imagen} = useStaticQuery(graphql`
    query {
        imagen: file(relativePath: { eq: "encuentra.jpg"}) {
            sharp: childImageSharp {
                fluid( maxWidth: 1500 ) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }`)

    return (
        <BackgroundImage
            Tag='section'
            fluid={imagen.sharp.fluid}
            fadeIn='soft'
            className='background-footer'
        >
            <div className='imagenbg' >
                <h3 className='titulo' >Encuentra la casa de tus sueños</h3>
                <p>15 años de experiencia </p>
            </div>
        </BackgroundImage>
    )
}

export default Encuentra
