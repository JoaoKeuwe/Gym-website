import React from 'react'
import aboutimage from '../images/about.png'

function About() {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutimage} alt="" />
      </div>
      <div className='about-text'>
        <h1>SAIBA MAIS SOBRE NÓS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a minus magni eum dolor voluptatem cupiditate sapiente temporibus. Suscipit autem ullam officia consectetur, saepe rerum repudiandae esse dicta tempore alias.</p>
        <button>LEIA MAIS</button>
      </div>
    </div>
  )
}

export default About