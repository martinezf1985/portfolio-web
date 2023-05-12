

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const cardTransition = {
//   type: 'spring',
//   stiffness: 500,
//   damping: 30
// };

// const cardVariants = {
//   hover: {
//     y: -5,
//     boxShadow: '0 5px 20px rgba(148, 0, 211)',
//     scale: 1.02
//   },
//   tap: {
//     y: 0,
//     boxShadow: '0 3px 10px rgba(148, 0, 211)',
//     scale: 1
//   },
//   link: {
//     cursor: 'pointer'
//   }
// };

// const CertificateCard = ({ certificate }) => {
//   const [error, setError] = useState(null); // estado para manejar los errores

//   const handleOnError = () => {
//     setError('Error al cargar la imagen'); // establecer el mensaje de error
//   };

//   return (
//     <div className="flex justify-center">
//   <motion.div
//     className="certificate-card bg-black rounded-lg overflow-hidden shadow-md text-white align- w-[280px] h-[580px]"
//     whileHover="hover"
//     whileTap="tap"
//     variants={cardVariants}
//     transition={cardTransition}
//   >
//     {certificate && certificate.image && (
//       <img src={certificate.image} alt={certificate.title} className="mb-4 w-full" onError={handleOnError} />
//     )}
//     <div className="p-8">
//       <h3 className="text-xl font-medium mb-2">{certificate.title ? certificate.title : 'No title provided'}</h3>
//       <p className="text-white mb-4">{certificate.description}</p>
//       <p className="text-white mb-2">
//         {certificate && certificate.id && (
//           <span className="text-white mb-2">
//             <strong>ID:</strong> {certificate.id}
//           </span>
//         )}
//       </p>
//     </div>
//   </motion.div>
// </div>

//   );
  
  
// };

// export default CertificateCard;







      
 import React, { useState } from 'react';
import { motion } from 'framer-motion';

const cardTransition = {
  type: 'spring',
  stiffness: 500,
  damping: 30
};

const cardVariants = {
  hover: {
    y: -5,
    boxShadow: '0 5px 20px rgba(148, 0, 211)',
    scale: 1.02
  },
  tap: {
    y: 0,
    boxShadow: '0 3px 10px rgba(148, 0, 211)',
    scale: 1
  },
  link: {
    cursor: 'pointer'
  }
};

const CertificateCard = ({ certificate }) => {
  const [error, setError] = useState(null);

  const handleOnError = () => {
    setError('Error al cargar la imagen');
  };

  return (
    <div className="  flex flex-wrap justify-center">
      {/* <div className=" justify-center"> */}
      <motion.div
        className="certificate-card bg-black rounded-lg overflow-hidden shadow-md text-white align- w-full h-[580px] mb-4"
        whileHover="hover"
        whileTap="tap"
        variants={cardVariants}
        transition={cardTransition}
      >
        {certificate && certificate.image && (
          <img src={certificate.image} alt={certificate.title} className="mb-4 w-full" onError={handleOnError} />
        )}
        <div className="p-8">
          <h3 className="text-xl font-medium mb-2">{certificate.title ? certificate.title : 'No title provided'}</h3>
          <p className="text-white mb-4">{certificate.description}</p>
          <p className="text-white mb-2">
            {certificate && certificate.id && (
              <span className="text-white mb-2">
                <strong>ID:</strong> {certificate.id}
              </span>
            )}
          </p>
        </div>
      </motion.div>
    </div>
  );
};


 
export default CertificateCard;





