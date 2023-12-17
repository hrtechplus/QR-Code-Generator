import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import "./ImgComponent.css";
export default function ImgComponent({ imageUrl, caption }) {
  return (
    <Box className="imgBox" p={6} rounded={"md"}>
      <Box textAlign="center" maxW="300px" mx="auto">
        <Image
          src="https://www.qrcode-monkey.com/img/qr/templates/ninja.svg"
          alt="Image"
          boxSize="100%"
          objectFit="cover"
          borderRadius="md"
          rounded="lg"
        />
        {caption && (
          <Text mt={2} color="gray.600" fontSize="sm">
            {caption}
          </Text>
        )}
      </Box>
    </Box>
  );
}
