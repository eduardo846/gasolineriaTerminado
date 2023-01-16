import React from "react";
import { Image, Box, Stack, Heading } from "@chakra-ui/react";
import ImageClick from "../assets/img/cursor.png";
import ImageClient from "../assets/img/button.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const buttonStart = () => {
    navigate("/surtidor");
  };
  return (
    <Box w="100%">
      <Stack
        spacing={8}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Box
          p={5}
          borderRadius="10"
          bgGradient="linear(to-r, teal.500, green.500)"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          cursor="pointer"
          shadow="base"
          _hover={{ shadow: "2xl" }}
          onClick={buttonStart}
        >
          <div>
            <Heading fontSize="5xl" color="white">
              Empezar
            </Heading>
            <Heading fontSize="4xl" color="white">
              Pulsa aquí
            </Heading>
          </div>
         <Image src={ImageClick} alt="Click Here" width="90px" />
        </Box>
      
      </Stack>
    </Box>
  );
};

export default Home;
