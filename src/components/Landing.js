import React from 'react'
import { Link } from 'react-router-dom'

//Components
import Projects from './Projects'

const Landing = () => {
    return (
    <div className="landing-bg-image">
        <section className="landing-bg-image">
            <h1>Alessandro Allegranzi</h1>
            <Link to={"/Projects"}>Projects</Link>
            <Link to={"/Blog"}>BLOG</Link>
        </section>
    </div>
    )
}

export default Landing