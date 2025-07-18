import React from 'react'
import '../assets/css/footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="email">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rutvibhoraniya99@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img src="../image/email.png" />
            </a>
        </div>
        <div className="github">
            <a href='https://github.com/RutviBhoraniya'><img src="../image/github.png" /></a>
        </div>
        <div className="linkdin">
            <a href='https://www.linkedin.com/in/rutvi-bhoraniya-05815126a/'><img src="../image/linkedin.png" /></a>
        </div>
        <div className="linkdin">
            <a href='https://leetcode.com/u/Rutvi_28/'><img src="../image/leetcode.png" /></a>
        </div>
    </div>
  )
}

export default Footer