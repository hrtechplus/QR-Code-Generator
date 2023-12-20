import React, { useState } from "react";
import { Flex, Center, Box, Container } from "@chakra-ui/react";
import ImgComponent from "./ImgComponent";
import Form from "./Form";
import LinkBtn from "./LinkBtn";
import "./Main.css";
import { Link } from "react-router-dom";
import { InstrucIcon } from "./img/InstrucIcon";
import { UserIcon } from "./img/UserIcon";

export default function CenteredBox() {
  const [formData, setFormData] = useState({
    data: "www.hasindu.online",
    color: "black",
    backgroundColor: "f5f5f5",
    size: 800,
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
    <Center minH="100vh" bg="#e6e6e6" maxW="100%" px={[2, 4, 6, 8]}>
      <Box
        className="MainContainer"
        p={[2, 4, 8]}
        maxW={["100%", "400px", "600px"]}
        w="100%"
      >
        <Flex
          direction={["column", "column", "row"]}
          align={["center", "center", "center"]}
          justify={["center", "center", "space-between"]}
          gap={[4, 4, 8]}
        >
          <Center minW={"215px"} w={["100%", "100%", "40%"]} mb={[0, 0, 0]}>
            <Flex direction="column" alignContent={"space-evenly"}>
              <ImgComponent
                imageUrl={generateQRCodeUrl()}
                caption={formData.data}
              />
              <Center mt={2}>
                <Flex maxW="300px" justify="center">
                  <Link to="./instructions">
                    <LinkBtn img={<InstrucIcon />} />
                  </Link>

                  <Link to="./about">
                    <LinkBtn img={<UserIcon />} />
                  </Link>
                </Flex>
              </Center>
            </Flex>
          </Center>
          <Container size={["100%", "100%", "100%", "150px", "150px"]}>
            <Form
              handleFormSubmit={handleFormSubmit}
              handleInputChange={handleInputChange}
              handleAdvancedChange={handleAdvancedChange}
              formData={formData}
              qrURL={generateQRCodeUrl}
            />
          </Container>
        </Flex>
      </Box>
    </Center>
  );
}
