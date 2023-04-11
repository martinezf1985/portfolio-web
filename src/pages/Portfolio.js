import React from 'react'
//import Cards from './cards/Cards'
//import projects from '../data/projects'
import AboutMe from './me/AboutMe'
import Nav from './nav/Nav'
import Footer from './footer/Footer'
 import Certificados from './cursos/Certificados'

import Proyectos from './cards/Proyectos'

function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <video className="fixed left-0 top-0 w-full h-full object-cover z-0" autoPlay muted loop>
        <source src="/images/cover3.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10">
        <Nav />
        <AboutMe />
        <br/> <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> 
      {/* <Cards projects={projects} /> */}
      <Proyectos />
        <br/> <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> 
        <Certificados/>
        <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        <Footer />
      </div>
    </div>
  )
}

export default Portfolio
