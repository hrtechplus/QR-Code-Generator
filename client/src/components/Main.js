import React from "react";
import { Flex, Center, Square, Text, Box } from "@chakra-ui/react";
import QRImg from "./QRImg";
import InputField from "./InputField";

export default function CenteredBox() {
  return (
    <Center>
      <Box
        px={[4, 8]} // Responsive padding on the x-axis
        py={[6, 12]} // Responsive padding on the y-axis
        boxShadow="xs"
        rounded="md"
        maxW="md" // Set maximum width for better mobile responsiveness
        w="100%" // Make sure the box takes the full width
      >
        <Flex direction="column" align="center">
          <Center w="100%" bg="green.500" mb={4}>
            <Text>Box 1</Text>
          </Center>
          <Square bg="blue.500" size={["100px", "150px"]} mb={4}>
            <Text>Box 2</Text>
          </Square>
          <Box w="100%" bg="tomato">
            <Text>Box 3</Text>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
