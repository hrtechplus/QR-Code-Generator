import React, { useState } from "react";
import { Flex, Center, Box, Container } from "@chakra-ui/react";
import ImgComponent from "./ImgComponent";
import Form from "./Form";
import LinkBtn from "./LinkBtn";
import "./Main.css";
export default function CenteredBox() {
  /////////////////

  const [formData, setFormData] = useState({
    data: "",
    imageUri: "icon://appstore",
    innerEye: "circle",
    outerEye: "circle",
    backgroundColor: "black",
    size: 200,
    format: "png",
  });

  const [qrCode, setQrCode] = useState(
    "https://api.qrserver.com/v1/create-qr-code/?size=450x450&data=Example&ecc=H&color=392467&bgcolor=FFD1E3&margin=19&qzone=1"
  );

  const handleInputChange = (e) => {
    alert("hello");
    const { name, value } = e.target;
    // e.target eken ganne  adala click una compoent eka
    setFormData({ ...formData, [name]: value });
  };

  const handleSliderChange = (value) => {
    setFormData({ ...formData, size: value });
  };

  const handleAdvancedChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling form submission
    console.log(formData);
  };
  ////////////////
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
            <Flex direction="column">
              <ImgComponent imageUrl={qrCode} />
              <Center mt={4}>
                <Flex maxW={"300px"} justify={"center"}>
                  <LinkBtn />
                  <LinkBtn />
                  <LinkBtn />
                </Flex>
              </Center>
            </Flex>
          </Center>
          <Container
            size={["100%", "150px", "150px"]} // Adjust the size for different screen sizes
          >
            <Form
              handleFormSubmit={handleFormSubmit}
              handleInputChange={handleInputChange}
              handleSliderChange={handleSliderChange}
              handleAdvancedChange={handleAdvancedChange}
              formData={formData}
              setQrCode={setQrCode}
            />
          </Container>
        </Flex>
      </Box>
    </Center>
  );
}
