import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import "./ImgComponent.css";

export default function ImgComponent({ imageUrl, caption = "sample" }) {
  return (
    <Box
      className="imgBox"
      p={[3, 6]}
      rounded="lg"
      maxW={["50%", "100vw", "100vw"]}
      mx="auto"
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
            Developed By Hasindu Rangika
          </Text>
        )}
      </Box>
    </Box>
  );
}
