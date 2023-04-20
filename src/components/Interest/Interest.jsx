import React from 'react'
import InterestBox from '../InterestBox/InterestBox'
import { Element } from 'react-scroll'
import './Interest.css'

const Interest = () => {
  return (
    <Element className='interestContainer' id='interests'>
        <h1>Interests</h1>
        <div className='interestContainer__info'>
            <InterestBox title="Machine Learning"/>
            <InterestBox title="VLSI" style={{backgroundColor: "#a4508b "}}/>
            <InterestBox title="Mongo DB"/>
            <InterestBox title="Spring Boot"/>
        </div>

    </Element>
  )
}

export default Interest
