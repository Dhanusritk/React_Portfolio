import React from 'react'
import { Element } from 'react-scroll'
import skill from '../assets/Skill1.gif';


import { LinearProgress } from '@mui/material';

import './Skills.css'

const SkillContainer = () => {
    return (
      <Element className="skillContainer" id="skills">
        <div className="skillContainer__image">
          <img src={skill} alt="skill" />
        </div>
        <div className="skillContainer__text">
          <h2>SKILLSET</h2>
          <div className="skillContainer__skillSet">
            <h5>Internet Of Things</h5>
            <div className="skillContainer__slider1">
              <LinearProgress  variant="determinate" value={90} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>React</h5>
            <div className="skillContainer__slider2">
              <LinearProgress variant="determinate" value={80} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>C++</h5>
            <div className="skillContainer__slider3">
              <LinearProgress variant="determinate" value={75} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>MySQL</h5>
            <div className="skillContainer__slider4">
              <LinearProgress variant="determinate" value={50} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>DSA</h5>
            <div className="skillContainer__slider5">
              <LinearProgress variant="determinate" value={80} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>Java</h5>
            <div className="skillContainer__slider6">
              <LinearProgress variant="determinate" value={45} />
            </div>
          </div>
        </div>
      </Element>
    );
  };
  
  export default SkillContainer;