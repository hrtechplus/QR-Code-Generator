import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import "./ImgComponent.css";

export default function ImgComponent({ imageUrl, caption = "sample" }) {
  const handleImageClick = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "qr_code.png"; // Specify the filename for the downloaded file
    link.click();
  };

  return (
    <Box
      className="imgBox"
      p={[3, 6]}
      maxW={["80vw", "100vw", "100vw"]}
      mx="auto"
      my={2}
      onClick={handleImageClick}
      style={{ cursor: "pointer" }}
    >
      <Box textAlign="center">
        <Image
          src={imageUrl}
          alt="Image"
          boxSize="100%"
          objectFit="cover"
          borderRadius="md"
          rounded="xl"
        />
        {caption && (
          <Text mt={2} color="gray.600" fontSize={["xs", "xs"]}>
            Developed By{" "}
            <Text color={"#0e0e0e"}>
              <a href="https://www.hasindu.online/">Hasindu Rangika</a>
            </Text>
          </Text>
        )}
      </Box>
    </Box>
  );
}
