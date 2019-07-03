import React from 'react'

//components
import Navbar from './Navbar'

const Projects = () => {
    return (
        <div>
            <Navbar/>
            <h1 className="main-h1">Projects</h1>
            <a href="https://dogsbestfriend.herokuapp.com/">Dog's Best Friend</a>
            <a href="https://github.com/1-8192">Gtihub</a>
        </div>
    )
}

export default Projects