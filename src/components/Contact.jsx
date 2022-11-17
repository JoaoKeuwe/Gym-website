import React from 'react'

function Contact() {
  return (
    <div id='contact'>
      <h1>FALE <span className='span1'>CONOSCO</span> </h1>
      <form>
        <input type="text" placeholder='Nome completo' required />
        <input type="email" placeholder='Digite seu E-mail' required />
        <textarea name="message" placeholder='Escreva aqui...'></textarea>
        <input type="submit" value='Enviar' />
      </form>

    </div>
  )
}

export default Contact