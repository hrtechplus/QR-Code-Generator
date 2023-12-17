import React from "react";
import { Flex, Center, Box, Square, Container } from "@chakra-ui/react";
import ImgComponent from "./ImgComponent";
import Form from "./Form";
import "./Main.css";

export default function CenteredBox() {
  return (
    <Center minH="100vh" bg={"#e6e6e6"}>
      <Box
        className="MainContainer"
        p={[2, 4, 8]} // Responsive padding
        maxW={["100%", "400px", "600px"]} // Set maximum width for responsiveness
        w="100%" // Take the full width
      >
        <Flex
          direction={["column", "column", "row"]}
          align={["center", "center", "flex-start"]}
          justify={["center", "center", "space-between"]}
          gap={[4, 4, 8]} // Adjust the gap for spacing on smaller screens
        >
          <Center
            w={["100%", "100%", "40%"]} // Adjust the width for different screen sizes
            mb={[4, 4, 0]} // Adjust margin-bottom for spacing on smaller screens
          >
            <ImgComponent />
          </Center>
          <Container
            size={["100%", "150px", "150px"]} // Adjust the size for different screen sizes
          >
            <Form />
          </Container>
        </Flex>
      </Box>
    </Center>
  );
}
