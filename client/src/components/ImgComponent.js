import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export default function ImgComponent({ imageUrl, caption }) {
  return (
    <Box textAlign="center" maxW="300px" mx="auto">
      <Image
        src={imageUrl}
        alt="Image"
        boxSize="100%"
        objectFit="cover"
        borderRadius="md"
      />
      {caption && (
        <Text mt={2} color="gray.600" fontSize="sm">
          {caption}
        </Text>
      )}
    </Box>
  );
}
