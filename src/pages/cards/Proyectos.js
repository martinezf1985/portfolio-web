

import React, { useState } from 'react';
import Link from 'next/link';
import Cards from '../../components/Cards';
import projects from '../../data/projects';

const Proyectos = () => {
  const [isShowingProjects, setIsShowingProjects] = useState(false);

  const handleToggleProjects = () => {
    setIsShowingProjects(!isShowingProjects);
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center">
      <button
      // className="text-8xl font-bold mb-8 text-green-500 animate-pulse transition-all duration-500"
        className="text-8xl font-bold mb-8 text-green-500 animate-pulse  "
        onClick={handleToggleProjects}
      >
        Proyectos
      </button>
      {isShowingProjects && (
        // <div className="absolute inset-0 z-20 bg-gray-900 bg-opacity-90 flex items-center justify-center">
        <div className="  ">
          {/* <div className="w-11/12 lg:w-1/2 " */}
          
          < div className=''>
            <Cards projects={projects} />
            <button
              className="absolute top-0 right-0 m-4 text-4xl font-bold text-white hover:text-gray-300 focus:outline-none"
              onClick={handleToggleProjects}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Proyectos;






// import React, { useState } from 'react';
// import Link from 'next/link';
// import Cards from '../../components/Cards';
// import projects from '../../data/projects';

// const Proyectos = () => {
//   const [isShowingProjects, setIsShowingProjects] = useState(false);

//   const handleToggleProjects = () => {
//     setIsShowingProjects(!isShowingProjects);
//   };

//   return (
//     <div className="relative z-10 flex flex-col items-center justify-center">
//       <button
//         className="text-8xl font-bold mb-8 text-green-500 animate-pulse"
//         onClick={handleToggleProjects}
//       >
//         Proyectos
//       </button>
//       {isShowingProjects && (
//         <div className="absolute inset-0 z-20 bg-gray-900 bg-opacity-90 flex items-center justify-center">
//           <Cards projects={projects} />
//           <button
//             className="absolute top-0 right-0 m-4 text-4xl font-bold text-white hover:text-gray-300 focus:outline-none"
//             onClick={handleToggleProjects}
//           >
//             X
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Proyectos;


