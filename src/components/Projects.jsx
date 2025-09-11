import React from 'react'
import '../assets/css/project.css'

const Projects = () => {
  return (
    <div className='Projects container' id='project'>
        <h1 className='project-title'>My Projects</h1>
        <div className='projects-row'>
            
                <div className='project'>
                    <img src='/image/IQ_logo.jpg' alt='IQ' className='project-img'/>
                    <a href='https://github.com/RutviBhoraniya/Test-Your-IQ'><h2 className='project-title'>Test your IQ</h2></a>
                    <p>Provide an engaging platform where users can challenge their logical thinking and problem-solving abilities through a variety of IQ test Quiz</p>
                </div>
            
            
                <div className='project'>
                    <img src='/image/math_logo.png' alt='brain' className='project-img'/>
                    <a href='https://mathematical-puzzle.netlify.app/home/home'><h2 className='project-title'>Mathematical Puzzle</h2></a>
                    <p>Make learning math fun by providing users with an engaging way to practice problem-solving through interactive puzzles.</p>
                </div>
            
                <div className='project'>
                    <img src='/image/weather.png' alt='weather' className='project-img'/>
                    <a href='https://weather-by-rrb.netlify.app/'><h2 className='project-title'>Weather App</h2></a>
                    <p>Provide users with instant, location-based weather insights through a clean and interactive interface.</p>
                </div>

                <div className='project'>
                    <img src='/image/culture.png' alt='culture Atlas' className='project-img'/>
                    <a href='https://cultureatlasbydr.onrender.com/'><h2 className='project-title'>Atlas</h2></a>
                    <p>An interactive culture platform where user can share their story and culture with people over world.</p>
                </div>
        </div>
    </div>
  )
}

export default Projects;