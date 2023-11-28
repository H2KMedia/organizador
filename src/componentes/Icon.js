import React from 'react';


const ImagenComponent = () => {
  const logoUTN = './utn.png'; // Ruta a tu imagen desde la carpeta public ojo!!

  return (
    <div>
      <img src={logoUTN} alt="logoUTN" width={100}/>
    </div>
  );
};

export default ImagenComponent;