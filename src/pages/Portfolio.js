import React, { useEffect, useState } from 'react';
import AboutMe from './me/AboutMe';
import Nav from './nav/Nav';
import Footer from './footer/Footer';
import Certificados from './cursos/Certificados';
import Proyectos from './cards/Proyectos';
import Skills from './sk/Skills'
// import  X from './X';

function Portfolio() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      <video className="fixed left-0 top-0 w-screen h-screen object-cover z-0" autoPlay muted loop>
        <source src="/images/cover3.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10">
        <Nav />
        <AboutMe />
        <div className="my-40"></div> {/* Add vertical spacing */}
        <Skills/>
        <div className="my-40"></div> {/* Add vertical spacing */}
        <Proyectos />
        <div className="my-80"></div> {/* Add vertical spacing */}
        {isClient && <Certificados />}
        
        {/* <X/> */}
        <div className="my-8"></div> {/* Add vertical spacing */}
        <Footer />
      </div>
      
      
    </div>
  );
  

}

export default Portfolio;










































// import React, { useEffect, useState } from 'react';
// import AboutMe from './me/AboutMe';
// //import Ab from './me/Ab';
//  import Nav from './nav/Nav';
// import Footer from './footer/Footer';
// import Certificados from './cursos/Certificados';
// import Proyectos from './cards/Proyectos';
// import Skills from './sk/Skills'
// function Portfolio() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <div className="relative min-h-screen">
//       <video className="fixed left-0 top-0 w-full h-full object-cover z-0" autoPlay muted loop>
//         <source src="/images/cover3.mp4" type="video/mp4" />
//       </video>

//       <div className="relative z-10">
//         <Nav />
//         <AboutMe />
//         <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br />
//         <Skills/>
//         <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br />
//         <Proyectos />
//         <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br />
//         {isClient && <Certificados />}
//         <br /> <br /> <br /> <br /> <br /> <br /> <br />
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default Portfolio;
