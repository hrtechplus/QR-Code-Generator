import React, { useState } from "react";
import axios from "axios";
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
import InputField from "./InputField";

export default function QRCodeForm({
  handleFormSubmit,
  handleInputChange,
  handleSliderChange,
  handleAdvancedChange,
  formData,
  setQrCode,
}) {
  return (
    <Box p={2} maxW="300px" mx="auto">
      <form onSubmit={handleFormSubmit}>
        <FormControl isRequired mb={2}>
          <FormLabel fontSize="sm">Data</FormLabel>
          <InputField
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

        <Button
          onClick={async () => {
            const options = {
              method: "POST",
              url: "https://qrcode3.p.rapidapi.com/qrcode/text",
              headers: {
                "content-type": "application/json",
                "X-RapidAPI-Key":
                  "555c31568cmshf00b9548b9b5b7dp1028ccjsn9d2c8be655ce",
                "X-RapidAPI-Host": "qrcode3.p.rapidapi.com",
              },
              data: {
                data: "https://linqr.app",
                image: {
                  uri: "https://w7.pngwing.com/pngs/991/568/png-transparent-facebook-logo-computer-icons-facebook-logo-facebook-thumbnail.png",
                  modules: true,
                },
                style: {
                  module: {
                    color: "black",
                    shape: "circle",
                  },
                  inner_eye: { shape: "circle" },
                  outer_eye: { shape: "circle" },
                  background: {},
                },
                size: {
                  width: 800,
                  quiet_zone: 8,
                  error_correction: "M",
                },
                output: {
                  filename: "qrcode",
                  format: "png",
                },
              },
            };

            try {
              const response = await axios.request(options);

              setQrCode(response.data);

              console.log(response.data);
            } catch (error) {
              console.error(error);
            }
          }}
          colorScheme="teal"
          size="sm"
          mt={2}
        >
          Generate QR Code
        </Button>
      </form>
    </Box>
  );
}
