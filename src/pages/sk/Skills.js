

// import React, { useState } from 'react';
// import SkillsCard from '../../components/SkillsCard';
// import skillList from '../../data/skillList';

// const Skills = () => {
//   const [showSkills, setShowSkills] = useState(false);

//   const handleShowSkills = () => {
//     setShowSkills(!showSkills);
//   };
//   //console.log(typeof skillList); // debería imprimir 'object' si es un array

//   return (
//     <div className="relative z-10 flex flex-col items-center justify-center sm:flex">
//       <button
//         className="text-8xl font-bold mb-8 text-green-500 animate-pulse"
//         onClick={handleShowSkills}
//       >
//         Skills
//       </button>
//       {showSkills && (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4 lg:py-8">
//           {skillList.map((skill, index) => (
//             <SkillsCard key={index} name={skill.name} iconUrl={skill.iconUrl} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Skills;





import React, { useState } from 'react';
import SkillsCard from '../../components/SkillsCard';
import skillList from '../../data/skillList';

const Skills = () => {
  const [showSkills, setShowSkills] = useState(false);

  const handleShowSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center sm:flex-wrap sm:justify-center">
      <button className="text-8xl font-bold mb-8 text-green-500 animate-pulse" onClick={handleShowSkills}>
        Skills
      </button>
      {showSkills && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4 lg:py-8">
          {skillList.map((skill, index) => (
            <SkillsCard key={index} name={skill.name} iconUrl={skill.iconUrl} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
