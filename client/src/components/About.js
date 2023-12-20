import React, { useState } from "react";
import { Center, Box, Container, Text, Button, Flex } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import "./Main.css";
import SocialMedia from "./SocialMedia";
import "../components/Form.css";
export default function About() {
  return (
    <Center minH="100vh" bg="#e6e6e6" maxW={["100%", "100%", "100%"]} px={6}>
      <Box
        className="MainContainer"
        p={[2, 4, 8]}
        maxW={["100%", "400px", "600px"]}
        w="100%"
      >
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          About Me - Hasindu
        </Text>
        <Text fontSize="sm" mb={4}>
          Hi there! I'm Hasindu, and I'm passionate about system development and
          experimentation with new technology. In this section, you can
          customize your QR code. Once you're ready, click on the "Generate QR
          Code" button.
        </Text>
        <Container size={["100%", "150px", "150px"]}>
          {/* Include your form component here */}
        </Container>
        <Text fontSize="sm" mt={4}>
          Your QR code will be displayed on the left. You can also find
          additional links below the QR code for more options.
        </Text>

        <Flex
          direction="column"
          align="center"
          justify="center"
          mx="auto"
          my={4}
        >
          <SocialMedia />
        </Flex>

        <Link to="/">
          <Button
            className="submitBtn"
            bg={"#191919"}
            colorScheme="white"
            color={"#f5f5f5"}
            leftIcon={<ArrowBackIcon />}
            size="sm"
            mb={4}
          >
            Back
          </Button>
        </Link>
      </Box>
    </Center>
  );
}
