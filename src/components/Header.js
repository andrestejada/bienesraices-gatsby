import { Link ,useStaticQuery , graphql} from 'gatsby'
import React from 'react'
import Nav from './Nav'
import './header.scss'


const Header = () => {
     
    const {logo} = useStaticQuery(graphql`
    query{
        logo:file(relativePath:{eq:"logo.svg"}){
            publicURL
    }
    }
    `)

    return (
        <header className='header' >
            <div className='header-container' >
                <Link to='/'>
                   <img src={logo.publicURL} alt='logo tipo bienesraices'  />
                </Link>
                <Nav/>
            </div>
        </header>
    )
}

export default Header
