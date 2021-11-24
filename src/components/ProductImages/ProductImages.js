import React, { useState, useEffect } from "react";
import { ProductImage, ProductImageGallery } from "./ProductImages.styled";

export const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);

  useEffect(() => {
    if (images[0].url !== "") {
      setMain(images[0]);
    }
  }, [images]);
  return (
    <div>
      <ProductImage src={main.url} alt={main.name} />
      <ProductImageGallery>
        {images.map((image, index) => {
          return (
            <img
              key={image.id}
              src={image.url}
              alt={image.name}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? "active" : null}`}
            />
          );
        })}
      </ProductImageGallery>
    </div>
  );
};
