import React from 'react'
import FeatureBox from './Featurebox'
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'


function Feature() {
  return (
    <div id='features'>
      <h1>
       Nossos <span className='span1'> Serviços </span>  exclusivos
        <div className='a-container'>
        <FeatureBox image={fimage1} title='Levantamento de peso'/>
        <FeatureBox image={fimage2} title='Aeróbico'/>
        <FeatureBox image={fimage3} title='Hipertrofia'/>
        <FeatureBox image={fimage4} title='Aulas Práticas'/>
        </div>
      </h1>
    </div     >
  )
}

export default Feature