import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  RadioGroup,
  Radio,
  Textarea,
} from "@chakra-ui/react";

export default function QRCodeForm() {
  const [formData, setFormData] = useState({
    data: "",
    imageUri: "",
    innerEye: "circle",
    outerEye: "circle",
    backgroundColor: "black",
    size: 200,
    outputFormat: "png",
  });

  const handleChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    // Add your logic to handle form submission
    console.log(formData);
  };

  return (
    <Box p={4} maxW="500px" mx="auto">
      <VStack spacing={4}>
        <Heading as="h1" size="lg" textAlign="center">
          QR Code Generator
        </Heading>

        <FormControl isRequired>
          <FormLabel>Data</FormLabel>
          <Input
            type="text"
            placeholder="Enter data"
            value={formData.data}
            onChange={(e) => handleChange("data", e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Image URI (Optional)</FormLabel>
          <Input
            type="text"
            placeholder="Enter image URI"
            value={formData.imageUri}
            onChange={(e) => handleChange("imageUri", e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Inner Eye</FormLabel>
          <RadioGroup
            value={formData.innerEye}
            onChange={(value) => handleChange("innerEye", value)}
          >
            <HStack spacing={4}>
              <Radio value="circle">Circle</Radio>
              <Radio value="square">Square</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Outer Eye</FormLabel>
          <RadioGroup
            value={formData.outerEye}
            onChange={(value) => handleChange("outerEye", value)}
          >
            <HStack spacing={4}>
              <Radio value="circle">Circle</Radio>
              <Radio value="square">Square</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Background Color</FormLabel>
          <Input
            type="color"
            value={formData.backgroundColor}
            onChange={(e) => handleChange("backgroundColor", e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Size</FormLabel>
          <Select
            value={formData.size}
            onChange={(e) => handleChange("size", e.target.value)}
          >
            <option value={200}>200</option>
            <option value={400}>400</option>
            <option value={800}>800</option>
            <option value={1000}>1000</option>
            <option value="custom">Custom</option>
          </Select>
        </FormControl>

        {formData.size === "custom" && (
          <FormControl>
            <FormLabel>Custom Size</FormLabel>
            <Input
              type="number"
              placeholder="Enter custom size"
              value={formData.size}
              onChange={(e) => handleChange("size", e.target.value)}
            />
          </FormControl>
        )}

        <FormControl>
          <FormLabel>Output Format</FormLabel>
          <Select
            value={formData.outputFormat}
            onChange={(e) => handleChange("outputFormat", e.target.value)}
          >
            <option value="svg">SVG</option>
            <option value="jpg">JPG</option>
            <option value="png">PNG</option>
          </Select>
        </FormControl>

        <Button colorScheme="blue" onClick={handleSubmit}>
          Generate QR Code
        </Button>
      </VStack>
    </Box>
  );
}
