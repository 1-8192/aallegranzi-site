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
        <header>
            <div> 
                <Link className="main-nav__logo" to={"/"} component={Landing}>
                    AA
                </Link>
            </div>
            <nav>
                <ul class="main-nav__items">
                    <li class="main-nav__item">
                        <Link to={"/Projects"} component={Projects}>Projects</Link>
                    </li>
                    <li class="main-nav__item">
                        <Link to={"/Blog"} component={Blog}>Blog</Link>
                    </li>
                    <li class="main-nav__item">
                        <Link to={"/Resume"} component={Resume}>Resume</Link>
                    </li>
                    <li class="main-nav__item">
                        <Link to={"/About"} component={About}>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar