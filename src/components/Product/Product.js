import React from "react";
import { Card, CardTitle } from "./Product.style";

const Product = ({ product }) => {
  const { name, images } = product;
  return (
    <Card>
      {images.map((image) => (
        <img
          key={image.id}
          src={`${image.formats.medium.url}`}
          alt={image.alternativeText}
        />
      ))}
      <CardTitle>{name}</CardTitle>
    </Card>
  );
};

export default Product;
