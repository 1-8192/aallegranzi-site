import React from 'react'
import { Link } from 'react-router-dom'

//components
import Projects from './Projects'
import Blog from './Blog'
import Resume from './Resume'
import About from './About'
import Landing from './Landing'

const Navbar = () => {
    return (
        <header className="main-header">
            <div> 
                <Link className="main-nav__logo" to={"/"} component={Landing}>
                    AA
                </Link>
            </div>
            <nav className="main-nav">
                <ul className="main-nav__items">
                    <li className="main-nav__item">
                        <Link className="main-nav__item--link" to={"/Projects"} component={Projects}>Projects</Link>
                    </li>
                    <li className="main-nav__item">
                        <Link className="main-nav__item--link" to={"/Blog"} component={Blog}>Blog</Link>
                    </li>
                    <li className="main-nav__item">
                        <Link className="main-nav__item--link" to={"/Resume"} component={Resume}>Resume</Link>
                    </li>
                    <li className="main-nav__item">
                        <Link className="main-nav__item--link" to={"/About"} component={About}>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar