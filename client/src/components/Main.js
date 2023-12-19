import React, { useState } from "react";
import { Flex, Center, Box, Container } from "@chakra-ui/react";
import ImgComponent from "./ImgComponent";
import Form from "./Form";
import LinkBtn from "./LinkBtn";
import "./Main.css";

export default function CenteredBox() {
  const [formData, setFormData] = useState({
    data: "www.hasindu.online",
    color: "black",
    backgroundColor: "black",
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
      name === "color" || name === "bgcolor" ? value.replace("#", "") : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: sanitizedValue,
    }));

    console.log(formData);
  };

  // const handleSliderChange = (e: { target: { name: any, value: any } }) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Add logic for handling form submission
    console.log(formData);
  };

  const handleAdvancedChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Center minH="100vh" bg="#e6e6e6">
      <Box
        className="MainContainer"
        p={[2, 4, 8]}
        maxW={["100%", "400px", "600px"]}
        w="100%"
      >
        <Flex
          direction={["column", "column", "row"]}
          align={["center", "center", "flex-start"]}
          justify={["center", "center", "space-between"]}
          gap={[4, 4, 8]}
        >
          <Center w={["100%", "100%", "40%"]} mb={[4, 4, 0]}>
            <Flex direction="column">
              <ImgComponent imageUrl={generateQRCodeUrl()} />
              <Center mt={4}>
                <Flex maxW="300px" justify="center">
                  <LinkBtn />
                  <LinkBtn />
                  <LinkBtn />
                </Flex>
              </Center>
            </Flex>
          </Center>
          <Container size={["100%", "150px", "150px"]}>
            <Form
              handleFormSubmit={handleFormSubmit}
              handleInputChange={handleInputChange}
              handleAdvancedChange={handleAdvancedChange}
              formData={formData}
            />
          </Container>
        </Flex>
      </Box>
    </Center>
  );
}
