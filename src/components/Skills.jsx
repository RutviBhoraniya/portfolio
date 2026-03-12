import React from 'react'
import '../assets/css/skills.css'
const Skills = () => {
  return (
    <section className='Skills container'>
      <h1 className='skills-title'>Skills</h1>
      <div className='skills-container'>
        <img className='skill' src='/image/html.png' alt='html' />
        <img className='skill' src='/image/css.png' alt='css' />
        <img className='skill' src='/image/javascript.png' alt='javascript' />
        <img className='skill' src='/image/react.png' alt='react' />
        <img className='skill' src='/image/node.png' alt='node' />
        <img className='skill' src='/image/expressJS.png' alt='expressJS' />
        <img className='skill' src='/image/MongoDB.png' alt='MongoDB' />
        <img className='skill' src='/image/restapi.png' alt='restapi' />
      </div>
    </section>
  )
}

export default Skills