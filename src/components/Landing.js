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
            <div className="landing_links">
                <Link className="landing_link" to={"/Projects"} component={Projects}>Projects</Link>
                <Link className="landing_link" to={"/Blog"} component={Blog}>Blog</Link>
                <Link className="landing_link" to={"/Resume"} component={Resume}>Resume</Link>
                <Link className="landing_link" to={"/About"} component={About}>About</Link> 
            </div>
        </section>
    </div>
    )
}

export default Landing