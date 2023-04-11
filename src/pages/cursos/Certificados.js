import React, { useState } from 'react';
import certificates from '../../data/certificates';
import CertificateCard from './CertificateCard';

const Certificados = () => {
  const [showCertificates, setShowCertificates] = useState(false);

  const handleShowCertificates = () => {
    setShowCertificates(!showCertificates);
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center">
      <button
        className="text-8xl font-bold mb-8 text-green-500 animate-pulse"
        onClick={handleShowCertificates}
      >
        Certificados
      </button>
      {showCertificates && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Certificados;
