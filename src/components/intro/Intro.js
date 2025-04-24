import React from 'react'
import bg from '../../assets/image.png'
import './intro.css'
const Intro = () => {
  return (
    <section  id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Ranjith</span><br/>Website Designer</span>
            <p className="introPara">
          I'm a skilled Web and Android app developer with experience in building 
          responsive, user-friendly websites and mobile apps using modern tools 
          like React, Kotlin, and Firebase. I focus on delivering clean UI, 
          real-time functionality, and scalable solutions.
        </p>
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro
