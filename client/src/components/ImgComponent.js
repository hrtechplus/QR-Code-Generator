import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import "./ImgComponent.css";

export default function ImgComponent({ imageUrl, caption = "sample" }) {
  return (
    <Box
      className="imgBox"
      p={[3, 6]}
      rounded={"md"}
      maxW={["100%", "300px"]}
      mx="auto"
    >
      <Box textAlign="center">
        <Image
          src="https://www.qrcode-monkey.com/img/qr/templates/ninja.svg"
          alt="Image"
          boxSize="100%"
          objectFit="cover"
          borderRadius="md"
          rounded="xl"
        />
        {caption && (
          <Text mt={2} color="gray.600" fontSize={["sm", "md"]}>
            {caption}
          </Text>
        )}
      </Box>
    </Box>
  );
}
