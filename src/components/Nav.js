import { Link } from 'gatsby'
import React from 'react'
import './Nav.scss'

const Nav = () => {
    return (
        <nav>
            <Link className='nav-link' activeClassName='pagina-actual' to='/'>Inicio</Link>
            <Link className='nav-link' activeClassName='pagina-actual' to='/nosotros'>Nosotros</Link>
            <Link className='nav-link' activeClassName='pagina-actual' to='/propiedades'>Propiedades</Link>
        </nav>
    )
}

export default Nav
