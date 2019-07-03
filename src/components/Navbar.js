import React from 'react'
import { Link } from 'react-router-dom'

//components
import Projects from './Projects'
import Blog from './Blog'
import Resume from './Resume'
import About from './About'

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={"/Projects"} component={Projects}>Projects</Link>
                    </li>
                    <li>
                        <Link to={"/Blog"} component={Blog}>Blog</Link>
                    </li>
                    <li>
                        <Link to={"/Resume"} component={Resume}>Resume</Link>
                    </li>
                    <li>
                        <Link to={"/About"} component={About}>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar