

import React from "react";
import Project from "../Project/Project";
import { Element } from "react-scroll";
import './Project_Container.css';
import img2 from '../assets/SpreadLoveLogo.webp'
import img3 from '../assets/BandobastLogo.webp';
import img4 from '../assets/DiaBLogo.webp'
import img1 from '../assets/PawsomeLogo.webp'

const ProjectContainer = () => {
  

  const client_projects = [
    {
                  img: img4,
                  title: "DiaB",
                  desc:
                    "A personalised virtual assiatant to help diabetic patients",
                    link: "https://github.com/Dhanusritk/DIAB"
                },
              
              {
                  img: img1,
                  title: "The Pawsome Hub",
                  desc:
                    "A forum where people can foster stray pets, Post their pets and raise complanits to the Blue-cross",
                    link: "https://github.com/Dhanusritk/DIAB"
                },
                {
                  img: img2,
                  title: "Spread Love",
                  desc:
                    "A web-extension which can filter out the negative content and promote positivity in all languages",
                    link: "https://github.com/Dhanusritk/DIAB"
                },
                {
                  img: img3,
                  title: "Bandobast Monitoring System",
                  desc:
                    "A web-app which can remotely track Police officers deployed in Bandobasts",
                    link: "https://github.com/Dhanusritk/DIAB"
                },
  ];

  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>
        From Concept to Completion , here are the projects that define Me and My Work
      </p>
      

      
        <div className="projectContainer__projects">
          {client_projects.map((project, index) => (
            <Project
              key={index}
              img={project.img}
              desc={project.desc}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
    </Element>
  );
};

export default ProjectContainer;