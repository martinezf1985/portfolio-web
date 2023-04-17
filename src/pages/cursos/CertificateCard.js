

import React,{useState} from 'react';
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
  const [error, setError] = useState(null); // estado para manejar los errores

  const handleOnError = () => {
    setError('Error al cargar la imagen'); // establecer el mensaje de error
  };

  return (
    <motion.div
      className="certificate-card bg-black rounded-lg overflow-hidden shadow-md text-white"
      whileHover="hover"
      whileTap="tap"
      variants={cardVariants}
      transition={cardTransition}
    >
      {certificate && certificate.image && (
        <img src={certificate.image} alt={certificate.title} className="mb-4" width="100%" onError={handleOnError} />
      )}
      <div className="p-4">
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
  );
};

export default CertificateCard;
