import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'


const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent__container'>
            <h1>Dhanu Sri Kumaravel</h1>
            <p>A Front-end & IoT Enthusiast</p>
            <a href='https://drive.google.com/file/d/11lvq5FPXRytnnz614STZbYMIXHPj9K2n/view?usp=sharing'>
            <button className="topContent__downloadButton">View my Resume</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className='topContent__workButton'>My Works</button>
            </Link>



        </div>
      
    </div>
  )
}

export default TopContent
