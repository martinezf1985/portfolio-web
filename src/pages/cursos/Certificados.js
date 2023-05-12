
// import React, { useState } from 'react';
// import certificates from '../../data/certificates';
// import CertificateCard from '../../components/CertificateCard';

// const Certificados = () => {
//   const [showCertificates, setShowCertificates] = useState(false);

//   const handleShowCertificates = () => {
//     setShowCertificates(!showCertificates);
//   };

//   return (
//     <div className="relative z-10 flex flex-col items-center justify-center">
//       <button
//         className="text-8xl font-bold mb-8 text-green-500 animate-pulse transition-all duration-500"
//         onClick={handleShowCertificates}
//       >
//         Certificados
//       </button>
//       <div
//         className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  duration-500 ${
//           showCertificates ? 'opacity-100' : 'opacity-0 pointer-events-none'
//         }`}
//       >
//         {certificates.map((certificate) => (
//           <CertificateCard key={certificate.id} certificate={certificate} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Certificados;







import React, { useState } from 'react';
import certificates from '../../data/certificates';
import CertificateCard from '../../components/CertificateCard';

const Certificados = () => {
  const [showCertificates, setShowCertificates] = useState(false);

  const handleShowCertificates = () => {
    setShowCertificates(!showCertificates);
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center">
      <button
        className="text-8xl font-bold mb-8 text-green-500 animate-pulse transition-all duration-500"
        onClick={handleShowCertificates}
      >
        Certificados
      </button>
      <div
        // className={` grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  duration-500 ${
        //   showCertificates ? 'opacity-100' : 'opacity-0 pointer-events-none'
        // } justify-center`}
        className='  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '
      >
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  );
};

export default Certificados;
