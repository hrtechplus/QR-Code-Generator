import React, { useState } from "react";
import { Center, Box, Container, Text, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import "./Main.css";

export default function About() {
  const [formData, setFormData] = useState({
    data: "www.hasindu.online",
    color: "f5f5f5",
    backgroundColor: "711DB0",
    size: 200,
    format: "png",
    ecc: "H",
    qzone: "1",
    margin: 19,
  });

  const generateQRCodeUrl = () => {
    const { color, size, data, ecc, backgroundColor, margin, qzone, format } =
      formData;
    return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${data}&ecc=${ecc}&color=${color}&bgcolor=${backgroundColor}&margin=${margin}&qzone=${qzone}&format=${format}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Remove '#' from color values
    const sanitizedValue =
      name === "color" || name === "backgroundColor"
        ? value.replace("#", "")
        : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: sanitizedValue,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling form submission
    console.log(formData);
  };

  const handleAdvancedChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

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
        <Link to="/">
          <Button
            leftIcon={<ArrowBackIcon />}
            colorScheme="purple"
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
