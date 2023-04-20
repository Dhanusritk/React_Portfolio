import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Contact.css'
const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>Email :<span>dhanusri2903@gmail.com</span></p>
            <p>Github Username: <span>dhanusritk</span></p>
            <div className='contact__icons'>
                <a href='https://www.linkedin.com/in/dhanu-sri-b53796247/'>
                    <IconButton>
                        <LinkedInIcon/>
                    </IconButton>

                </a>
                <a href='https://www.instagram.com/dhanu.__.sri/'>
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>

                </a>
                <a href=''>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>

                </a>
            </div>
        </div>
    </Element>
  )
}

export default Contact
