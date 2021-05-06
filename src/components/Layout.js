import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import './styles.scss'

const Layout = ({children}) => {
    return (
       <>
            <Helmet>
            <title>Bienes Raices en gatsby </title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;700;900&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
            </Helmet>
            <Header/>
            {children}
        </>
    )
}

export default Layout
