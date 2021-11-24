import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../actions/productActions";
import { useParams } from "react-router-dom";
import { ProductImages } from "../../components/ProductImages/ProductImages";

import { formatPrice, approxEur } from "../../helper";

import { Container } from "../../Global.styled";
import {
  ProductBrand,
  ProductInfo,
  ProductInStock,
  ProductPrice,
  ProductTitle,
  ProductWrap,
} from "./Product.style";

const Product = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.singleProduct);

  const {
    images,
    title: productTitle,
    price,
    stock,
    brand,
    size,
    description,
    material,
    countryOfOrigin,
  } = product;

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  return (
    <Container>
      <ProductWrap>
        <ProductImages images={images} />

        <div>
          <ProductTitle>{productTitle}</ProductTitle>

          {brand && (
            <ProductBrand>
              <Link>{brand.Title}</Link>
            </ProductBrand>
          )}

          <ProductPrice>
            {formatPrice(price)}

            <div className="approx__price">
              {`(approx.EUR ${approxEur(price)})`}
            </div>
          </ProductPrice>

          {stock ? (
            <ProductInStock>{`${stock} in stock`}</ProductInStock>
          ) : (
            <ProductInStock>Not in stock</ProductInStock>
          )}

          {size && (
            <ProductInfo>
              <h3>Size:</h3>
              <div>{size}</div>
            </ProductInfo>
          )}
          {description && (
            <ProductInfo>
              <h3>Description:</h3>
              <div>{description}</div>
            </ProductInfo>
          )}
          {material && (
            <ProductInfo>
              <h3>Material:</h3>
              <div>{material}</div>
            </ProductInfo>
          )}
          {countryOfOrigin && (
            <ProductInfo>
              <h3>Country of origin:</h3>
              <div>{countryOfOrigin}</div>
            </ProductInfo>
          )}
        </div>
      </ProductWrap>
    </Container>
  );
};

Product.propTypes = {
  brand: PropTypes.string,
};

export default Product;
