import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'

function AboutMe() {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex-1 max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            
      <div className="flex justify-center items-center mb-10">
  <h1 className="text-6xl font-bold text-center text-purple-700 animate-pulse">PORTFOLIO</h1>


  <br/>
  <br/>
  <br/>
</div>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-green-500 mb-8">
            Hola a todos!!!, mi nombre es <span className='text-blue-700 animate-pulse'>Fernando Martinez</span>. 
               siempre fui una apasionado de la innovación tecnológica 
            </p>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-green-500 mb-8">
            Soy Developer Fullstack con orientación en front end, cuento con experiencia en proyectos
enfocados a industrias(grupal e individual) usando tecnologías como HTML, CSS, JavaScript,
TypeScript, React , Nextjs, NodeJs, Express, Firebase, Postgress SQL y MongoDB, con habilidades
para trabajo en equipo usando metolodías scrum .
Actualmente me encuentro en búsqueda de empleo como Developer Fullstack.
            </p>
           
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-green-500 mb-8">
              Si estás interesado en mi perfil, ¡no dudes en contactarme a través de mi LinkedIn! Estaré encantado de conectarte y conversar sobre oportunidades laborales o proyectos interesantes. Puedes encontrarme en <Link href="https://www.linkedin.com/in/fernandoh-martinez/" className="text-blue-500 hover:underline animate-pulse">https://www.linkedin.com/in/fernandoh-martinez/</Link>
            </p>
            {/* <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-green-500 mb-8">
              También puedes contactarme por correo electrónico: <Link href="martinezf1985@gmail.com" className="text-blue-500 hover:underline animate-pulse">martinezf1985@gmail.com<p/></Link></p> */}
</motion.div>
<motion.img
// h-auto max-w-lg ml-auto
className="flex-1 max-w-lg h-auto lg:pl-16 mt-8 lg:mt-0"
src="/images/fer-img.jpg"
alt="Imagen de perfil de Fernando Martinez"
// width={500}
// height={500}5Y33Ç+
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.5 }}
/>
</div>
</div>
);
}

export default AboutMe