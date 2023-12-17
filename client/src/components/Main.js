import React from "react";
import { Flex, Center, Box, Square } from "@chakra-ui/react";
import ImgComponent from "./ImgComponent";
import Form from "./Form";

export default function CenteredBox() {
  return (
    <Center minH="100vh">
      <Box
        className="MainContainer"
        p={[2, 4, 8]} // Responsive padding
        boxShadow="md"
        rounded="md"
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
          <Square
            bg="blue.500"
            size={["100%", "150px", "150px"]} // Adjust the size for different screen sizes
          >
            <Form />
          </Square>
        </Flex>
      </Box>
    </Center>
  );
}
