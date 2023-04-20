import React from "react";
import Header from "./components/Header/Header";
import TopContainer from "./components/TopContainer/TopContainer";
import Skills from "./components/Skills/Skills";
import ProjectContainer from "./components/Project_Container/Project_Container";
import './App.css'
import Interest from "./components/Interest/Interest";
import Contact from "./components/Contact/Contact";

const App=()=>{
  return(
    <>
    <Header/>
    <TopContainer/>
    <Skills/>
    <ProjectContainer />
    <Interest />
    <Contact/>
    </>
  )
}
export default App;