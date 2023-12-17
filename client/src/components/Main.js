import React from "react";
import { Flex, Center, Square, Text, Box } from "@chakra-ui/react";
import QRImg from "./QRImg";
import InputField from "./InputField";

export default function CenteredBox() {
  return (
    <Center>
      <Box
        px={[2, 4, 8]} // Responsive padding on the x-axis
        py={[4, 6, 12]} // Responsive padding on the y-axis
        boxShadow="md"
        rounded="md"
        maxW={["100%", "400px", "600px"]} // Set maximum width for better responsiveness
        w="100%" // Make sure the box takes the full width
      >
        <Flex
          direction={["column", "column", "row"]}
          align="center"
          justify={"center"}
          gap={[4, 4, 0]} // Adjust the gap for spacing on smaller screens
        >
          <Center
            w={["100%", "100%", "20%"]} // Adjust the width for different screen sizes
            bg="green.500"
            mb={[4, 4, 0]} // Adjust margin-bottom for spacing on smaller screens
          >
            <Text>Box 1</Text>
          </Center>
          <Square
            bg="blue.500"
            size={["100px", "150px", "150px"]} // Adjust the size for different screen sizes
            mb={[4, 4, 0]} // Adjust margin-bottom for spacing on smaller screens
          >
            <Text>Box 2</Text>
          </Square>
        </Flex>
      </Box>
    </Center>
  );
}
