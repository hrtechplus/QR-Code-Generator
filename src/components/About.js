import React, { useState } from "react";
import { Center, Box, Container, Text, Button, Flex } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import "./Main.css";

import "../components/Form.css";
import SocialMedia from "./SocialMedia/SocialMedia";
export default function About() {
  return (
    <Center minH="100vh" bg="#e6e6e6" maxW={["100%", "100%", "100%"]} px={6}>
      <Box
        className="MainContainer"
        p={[2, 4, 8]}
        maxW={["100%", "400px", "600px"]}
        w="100%"
      >
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          About Me
        </Text>
        <Text fontSize="sm" mb={4}>
          Hi there! I'm Hasindu, and I'm passionate about system development and
          experimentation with new technology. and another cool thing is I like
          make a positive impact on people's lives.
        </Text>
        <Container size={["100%", "150px", "150px"]}>
          {/* Include your form component here */}
        </Container>

        <Text fontSize="sm" mt={4} color={"Gray 900"}>
          Cmon. Let's get connected!😉
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
