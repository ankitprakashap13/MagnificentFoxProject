import React from 'react';
import { Button } from 'atomize';

export const CustomButton = ({ children }) => (
  <Button
    h="2.5rem"
    w="10rem"
    bg="info700"
    hoverBg="info800"
    rounded="circle"
    m={{ r: "1rem" }}
  >
    {children}
  </Button>
);
