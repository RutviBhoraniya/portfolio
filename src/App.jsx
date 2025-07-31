import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';

function App() {

  return (
      <div className='app'>
        <Header/>
        <div className='gap'></div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Project' element={<Projects/>}/>
          <Route path='/AboutUs' element={<About/>}/>
          <Route path='/Skills' element={<Skills/>}/>
          <Route path='/ContactUs' element={<Contact/>}/>
        </Routes>
      </div>
  )
}

export default App
