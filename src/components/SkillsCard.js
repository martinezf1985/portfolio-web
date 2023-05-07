// import React from 'react';
// import { motion } from 'framer-motion';

// const SkillsCard = ({ name, iconUrl }) => {
//   return (
//     <motion.div
//       className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto sm:h-48 md:h-64 lg:h-80 sm:flex-row lg:py-8"
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       <img src={iconUrl} alt={name} className="w-12 h-12 mx-auto mb-4" />
//       <h3 className="text-xl font-medium text-center">{name}</h3>
//     </motion.div>
//   );
// };

// export default SkillsCard;



import React from 'react';
import { motion } from 'framer-motion';

const SkillsCard = ({ name, iconUrl }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={iconUrl} alt={name} className="w-12 h-12 mx-auto mb-4" />
      <h3 className="text-xl font-medium text-center">{name}</h3>
    </motion.div>
  );
};

export default SkillsCard