import React from 'react';
import { Div, Text, Image, Button } from 'atomize';

const NotFound = () => {
  return (
    <Div d="flex" flexDir="column" align="center" justify="center" h="100vh" bg="info200">
      <Image src="/path/to/logo.png" alt="Logo" w="200px" />
      <Text tag="h1" textSize="display1" m={{ t: "1rem" }} textColor="info800">
        404 - Page Not Found
      </Text>
      <Text tag="p" textSize="subheader" m={{ t: "0.5rem" }} textColor="info700" textAlign="center">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Text>
      <Button
        m={{ t: "1rem" }}
        bg="info700"
        hoverBg="info800"
        textColor="white"
        onClick={() => window.location.href = '/'}
      >
        Go to Homepage
      </Button>
    </Div>
  );
};

export default NotFound;
