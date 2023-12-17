import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  RadioGroup,
  Radio,
  Checkbox,
  Button,
  ColorModeProvider,
  useColorModeValue,
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: checked }));
  };

  const handleColorChange = (color) => {
    setFormData((prevData) => ({ ...prevData, backgroundColor: color.hex }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <ColorModeProvider>
      <Box p={4}>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4} isRequired>
            <FormLabel>Data</FormLabel>
            <Input
              type="text"
              name="data"
              value={formData.data}
              onChange={handleInputChange}
              placeholder="Enter data"
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Image URI (Optional)</FormLabel>
            <Input
              type="text"
              name="imageUri"
              value={formData.imageUri}
              onChange={handleInputChange}
              placeholder="Enter image URI"
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Inner Eye</FormLabel>
            <RadioGroup
              name="innerEye"
              value={formData.innerEye}
              onChange={handleInputChange}
            >
              <Radio value="circle">Circle</Radio>
              <Radio value="square">Square</Radio>
            </RadioGroup>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Outer Eye</FormLabel>
            <RadioGroup
              name="outerEye"
              value={formData.outerEye}
              onChange={handleInputChange}
            >
              <Radio value="circle">Circle</Radio>
              <Radio value="square">Square</Radio>
            </RadioGroup>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Background Color</FormLabel>
            <Input
              type="color"
              name="backgroundColor"
              value={formData.backgroundColor}
              onChange={(e) => handleColorChange(e.target.value)}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Size</FormLabel>
            <Select
              name="size"
              value={formData.size}
              onChange={handleInputChange}
            >
              <option value={200}>200</option>
              <option value={400}>400</option>
              <option value={800}>800</option>
              <option value={1000}>1000</option>
              <option value="custom">Custom</option>
            </Select>
          </FormControl>

          {formData.size === "custom" && (
            <FormControl mb={4}>
              <FormLabel>Custom Size</FormLabel>
              <Input
                type="number"
                name="size"
                value={formData.size}
                onChange={handleInputChange}
                placeholder="Enter custom size"
              />
            </FormControl>
          )}

          <FormControl mb={4}>
            <FormLabel>Output Format</FormLabel>
            <Select
              name="outputFormat"
              value={formData.outputFormat}
              onChange={handleInputChange}
            >
              <option value="png">PNG</option>
              <option value="jpg">JPG</option>
              <option value="svg">SVG</option>
            </Select>
          </FormControl>

          <FormControl mb={4}>
            <Checkbox
              name="modules"
              isChecked={formData.modules}
              onChange={handleCheckboxChange}
            >
              Include Modules
            </Checkbox>
          </FormControl>

          <Button type="submit" colorScheme="teal">
            Generate QR Code
          </Button>
        </form>
      </Box>
    </ColorModeProvider>
  );
}
