import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function QRCodeForm() {
  const [formData, setFormData] = useState({
    data: "",
    imageUri: "icon://appstore",
    innerEye: "circle",
    outerEye: "circle",
    backgroundColor: "black",
    size: 200,
    format: "png",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
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

  return (
    <Box p={2} maxW="300px" mx="auto">
      <form onSubmit={handleFormSubmit}>
        <FormControl isRequired mb={2}>
          <FormLabel fontSize="sm">Data</FormLabel>
          <Input
            type="text"
            name="data"
            value={formData.data}
            onChange={handleInputChange}
            size="sm"
            placeholder="Enter data"
          />
        </FormControl>

        <Tabs variant="enclosed-colored" isLazy size="sm">
          <TabList>
            <Tab fontSize="sm">Basic Settings</Tab>
            <Tab fontSize="sm">Advanced Settings</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack spacing={2}>
                <FormControl>
                  <FormLabel fontSize="sm">Image URI</FormLabel>
                  <Input
                    type="text"
                    name="imageUri"
                    value={formData.imageUri}
                    onChange={handleInputChange}
                    size="sm"
                    placeholder="Enter image URI"
                  />
                </FormControl>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={2}>
                <FormControl>
                  <FormLabel fontSize="sm">Inner Eye Style</FormLabel>
                  <Select
                    name="innerEye"
                    value={formData.innerEye}
                    onChange={(e) =>
                      handleAdvancedChange("innerEye", e.target.value)
                    }
                    size="sm"
                  >
                    <option value="circle">Circle</option>
                    <option value="square">Square</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel fontSize="sm">Outer Eye Style</FormLabel>
                  <Select
                    name="outerEye"
                    value={formData.outerEye}
                    onChange={(e) =>
                      handleAdvancedChange("outerEye", e.target.value)
                    }
                    size="sm"
                  >
                    <option value="circle">Circle</option>
                    <option value="square">Square</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel fontSize="sm">Background Color</FormLabel>
                  <Input
                    type="color"
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    onChange={handleInputChange}
                    size="sm"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize="sm">Size</FormLabel>
                  <Slider
                    name="size"
                    min={200}
                    max={1000}
                    step={200}
                    defaultValue={200}
                    value={formData.size}
                    onChange={handleSliderChange}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb boxSize={4} />
                  </Slider>
                  <Text fontSize="xs" textAlign="center">
                    {formData.size}px
                  </Text>
                </FormControl>

                <FormControl>
                  <FormLabel fontSize="sm">Format</FormLabel>
                  <Select
                    name="format"
                    value={formData.format}
                    onChange={(e) =>
                      handleAdvancedChange("format", e.target.value)
                    }
                    size="sm"
                  >
                    <option value="png">PNG</option>
                    <option value="jpg">JPG</option>
                    <option value="svg">SVG</option>
                  </Select>
                </FormControl>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Button type="submit" colorScheme="teal" size="sm" mt={2}>
          Generate QR Code
        </Button>
      </form>
    </Box>
  );
}
