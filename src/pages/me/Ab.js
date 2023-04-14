

//<img class="h-auto max-w-lg ml-auto" src="/docs/images/examples/image-1@2x.jpg" alt="image description">
import React from 'react';
 import { motion } from 'framer-motion';
 import Link from 'next/link'


const Ab = () => {
  return (
    <div>


{/* 
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
              Soy Developer Fullstack, siempre fui una apasionado de la innovación tecnológica 
            </p>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-green-500 mb-8">
              Soy una persona dinámica y adaptable, capaz de enfrentar cualquier situación que requiera el proyecto en el que estoy trabajando. Mi objetivo es formar parte de empresas innovadoras, donde pueda trabajar en equipo con otros profesionales que se planteen desafíos y se exijan lo mejor de sí mismos cada día para entregar productos innovadores que satisfagan las necesidades del cliente.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-green-500 mb-8">
              Actualmente estoy en la búsqueda de empleo como desarrollador Fullstack, tengo experiencia en tecnologías como JavaScript con React y Nextjs para el Frontend, NodeJs con Express para el backend, Firebase, Postgress SQL y MongoDB para la base de datos.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-green-500 mb-8">
              Si estás interesado en mi perfil, ¡no dudes en contactarme a través de mi LinkedIn! Estaré encantado de conectarte y conversar sobre oportunidades laborales o proyectos interesantes. Puedes encontrarme en <Link href="https://www.linkedin.com/in/fernandoh-martinez/" className="text-blue-500 hover:underline animate-pulse">https://www.linkedin.com/in/fernandoh-martinez/</Link>
            </p>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-green-500 mb-8">
              También puedes contactarme por correo electrónico: <Link href="martinezf1985@gmail.com" className="text-blue-500 hover:underline animate-pulse">martinezf1985@gmail.com<p/></Link></p>
</motion.div> */}

<div>


<p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-green-500 mb-8">
            Hola a todos!!!, mi nombre es <span className='text-blue-700 animate-pulse'>Fernando Martinez</span>. 
              Soy Developer Fullstack, siempre fui una apasionado de la innovación tecnológica 
            </p>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-green-500 mb-8">
              Soy una persona dinámica y adaptable, capaz de enfrentar cualquier situación que requiera el proyecto en el que estoy trabajando. Mi objetivo es formar parte de empresas innovadoras, donde pueda trabajar en equipo con otros profesionales que se planteen desafíos y se exijan lo mejor de sí mismos cada día para entregar productos innovadores que satisfagan las necesidades del cliente.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-green-500 mb-8">
              Actualmente estoy en la búsqueda de empleo como desarrollador Fullstack, tengo experiencia en tecnologías como JavaScript con React y Nextjs para el Frontend, NodeJs con Express para el backend, Firebase, Postgress SQL y MongoDB para la base de datos.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-green-500 mb-8">
              Si estás interesado en mi perfil, ¡no dudes en contactarme a través de mi LinkedIn! Estaré encantado de conectarte y conversar sobre oportunidades laborales o proyectos interesantes. Puedes encontrarme en <Link href="https://www.linkedin.com/in/fernandoh-martinez/" className="text-blue-500 hover:underline animate-pulse">https://www.linkedin.com/in/fernandoh-martinez/</Link>
            </p>
            
</div>

{/* <img class="h-auto max-w-lg ml-auto" src="/images/fer-img.jpg" alt="image perfil"></img> */}
<motion.img
// h-auto max-w-lg ml-auto
// className="flex-1 max-w-lg h-auto lg:pl-16 mt-8 lg:mt-0"
className="h-auto max-w-lg ml-auto  "
src="/images/fer-img.jpg"
alt="Imagen de perfil de Fernando Martinez"
// width={500}
// height={500}5Y33Ç+
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.5 }}
/>







    </div>
  )
}

export default Ab

