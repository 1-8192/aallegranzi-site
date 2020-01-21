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
        <section>
            <div className="landing_links">
                <Link className="landing_link" to={"/Projects"} component={Projects}>Projects</Link>
                <Link className="landing_link" to={"/Blog"} component={Blog}>Blog</Link>
                <Link className="landing_link" to={"/Resume"} component={Resume}>Resume</Link>
                <Link className="landing_link" to={"/About"} component={About}>About</Link> 
            </div>
        </section>
        <div classname="landing-content">
            <p>I'm a full Stack Web Developer</p>
            <div>
                <ul>
                    <li>
                        Let's connect! <a href="https://www.linkedin.com/in/allegranzi/">LinkedIn</a>
                    </li>
                    <li>
                        Check out my code on <a href="https://github.com/1-8192">Github</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Landing