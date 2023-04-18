// import React from 'react';
// import { motion } from 'framer-motion';

// const SkillsCard = ({ name, iconUrl }) => {
//   return (
//     <motion.div
//       className="bg-white rounded-lg shadow-lg p-4"
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