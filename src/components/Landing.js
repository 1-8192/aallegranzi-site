import React from 'react'
import { Link } from 'react-router-dom'

//Components
import Projects from './Projects'
import Blog from './Blog'
import Resume from './Resume'
import About from './About'

const Landing = () => {
    return (
    <div className="landing-bg-image">
        <section className="landing-bg-image">
            <h1>Alessandro Allegranzi</h1>
            <Link to={"/Projects"}>Projects</Link>
            <Link to={"/Blog"} component={Blog}>Blog</Link>
            <Link to={"/Resume"} component={Resume}>Resume</Link>
            <Link to={"/About"} component={About}>About</Link>
        </section>
    </div>
    )
}

export default Landing