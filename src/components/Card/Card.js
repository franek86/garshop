import React from "react";
import { CardWrap, CardImage, CardFooter } from "./Card.style";

import { formatPrice, approxEur } from "../../helper";

const Card = ({ product }) => {
  const { title, price, images, brand } = product;
  return (
    <CardWrap>
      {images.map((image) => (
        <CardImage
          key={image.id}
          src={`${image.formats.medium.url}`}
          alt={image.alternativeText}
        />
      ))}
      <CardFooter>
        <div className="card__footer">
          <h2>{title}</h2>
          {brand && <h2>{brand.Title}</h2>}
          {formatPrice(price)}
          <div className="approx__price">
            {`(approx.EUR ${approxEur(price)})`}
          </div>
        </div>
        <div className="card__footer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon--m"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0.5}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </CardFooter>
    </CardWrap>
  );
};

export default Card;
