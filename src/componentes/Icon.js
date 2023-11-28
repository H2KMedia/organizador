import React from 'react';
//import logoUTN from './imagenes/utn.png';

const ImagenComponent = () => {
  const logoUTN = '.imagenes/logo-utn.png'; // Ruta a tu imagen

return (
    <div>
    <img src={logoUTN} alt="logoUTN"/>
    </div>
);
};

export default ImagenComponent;
