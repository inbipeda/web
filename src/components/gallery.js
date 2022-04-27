import React from "react";
import Gallery from "react-grid-gallery";

const Gal = () => {
  const IMAGES = [
    {
      src: "https://i.imgur.com/mBzDFwz.jpg",
      thumbnail:
        "https://i.imgur.com/mBzDFwz.jpg",
      caption: "Círculo - Cortando la tela",
    },
    {
      src: "https://i.imgur.com/eP61HS5.jpg",
      thumbnail:
        "https://i.imgur.com/eP61HS5.jpg",
      caption: "Círculo - Armando la estructura",
    },
    {
      src: "https://i.imgur.com/eoQGwSV.jpg",
      thumbnail:
        "https://i.imgur.com/eoQGwSV.jpg",
      caption: "La equipa de visuales y registro trabajando juntas",
    },
    {
      src: "https://i.imgur.com/rqc2jKq.png",
      thumbnail:
        "https://i.imgur.com/rqc2jKq.png",
      caption: "Cherryla en un ensayo",
    },
  ];
  return (
    <div className="gallery sides bottom-l">
      <h2 className="bottom">Registros</h2>
      <Gallery enableImageSelection={false} images={IMAGES} />
    </div>
  );
};

export default Gal;
