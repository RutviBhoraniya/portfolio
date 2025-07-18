import React from 'react'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className='Home'>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Home