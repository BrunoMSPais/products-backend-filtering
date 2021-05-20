/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  CardContainer,
  CardBody,
  CardHeader,
  CardDescription,
  CardValues,
  CardRating,
  CardPrice,
} from './Card.elements';

const Card = ({ products }) => {
  return (
    <CardContainer>
      {products.map((product) => (
        <CardBody key={product._id}>
          <CardHeader>{product.name}</CardHeader>
          <CardDescription>{product.description}</CardDescription>
          <CardValues>
            <CardRating>{product.rating}</CardRating>
            <CardPrice>{product.price}€</CardPrice>
          </CardValues>
        </CardBody>
      ))}
    </CardContainer>
  );
};

export default Card;
