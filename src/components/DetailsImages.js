import React, { useEffect, useState } from "react";
import "./style/detailsimages.css";

function DetailsImages({ image }) {
  const [imageData, setImageData] = useState();

  useEffect(() => {
    setImageData(image && image[0]);
  }, [image]);
  const selectImage = (id) => {
    setImageData(...image?.filter((item) => item.id === id));
  };
  return (
    <figure className="details-images">
      <img src={imageData?.url} alt="" />

      <section className="images-select">
        {image?.map((item) => {
          return (
            <img src={item?.url} alt="" onClick={() => selectImage(item?.id)} key={item.id}/>
          );
        })}
      </section>
    </figure>
  );
}

export default DetailsImages;
