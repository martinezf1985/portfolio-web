import Cert from '../pages/cursos/Certificados';
import coder from  '.././../public/images/coder.jpg'
import henryCert from  '.././../public/images/henryCert.jpg'
import p5cert from  '.././../public/images/p5cert.jpg'


const images = [
    {
      src: coder,
      alt: 'Imagen 1',
      objectFit: 'cover',
      description: 'React',
    },
    {
      src: henryCert,
      alt: 'Imagen 2',
      objectFit: 'contain',
      description: 'Fullstack developer',
    },
    {
      src: p5cert,
      alt: 'Imagen 3',
      objectFit: 'cover',
      description: 'introduccion ala programacion web, html, css y javascript',
    },
  ];
  

function certImg() {
  return (
    <div>
      {images && images.length > 0 && <Cert images={images} />}
    </div>
  );
}

export default certImg;
