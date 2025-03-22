import React from 'react';
import { Div, Image, Text, Button } from 'atomize';

const ProductCard = ({ card }) => (
  <Div m={{ b: "1rem" }} shadow="3" hoverShadow="4" p="0.5rem" rounded="lg" maxW="150px">
    <Image src={card.imageUrl} alt={card.name} width="100%" h="auto" />
    <Text tag="h4" m={{ t: "0.5rem" }} textSize="caption">
      {card.name}
    </Text>
    <Text tag="h6" textColor="gray700" textSize="tiny">
      MRP: ₹{(card.price / 100).toFixed(2)}
    </Text>
    {card.salePrice && (
      <Text tag="h6" textColor="danger700" textSize="tiny">
        Sale: ₹{(card.salePrice / 100).toFixed(2)}
      </Text>
    )}
    <Button
      m={{ t: "0.5rem" }}
      onClick={() => window.location.href = card.link}
      textSize="tiny"
    >
      View Product
    </Button>
  </Div>
);

export default ProductCard;
