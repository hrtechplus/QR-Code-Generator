import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Fade, Hinge } from "react-awesome-reveal";
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

import "./Form.css";
export default function QRCodeForm({
  handleFormSubmit,
  handleInputChange,
  handleAdvancedChange,
  formData,
  qrURL,
}) {
  // Separate function to handle slider changes
  const handleSliderChange = (name, value) => {
    handleInputChange({ target: { name, value } });
  };

  //////////////////////////
  //////////////////////////

  return (
    <Box
      p={2}
      maxW={["100%", "300px"]}
      mx="auto"
      className="MainFormBox"
      px={4}
      mb={4}
    >
      <form onSubmit={handleFormSubmit}>
        <FormControl isRequired mb={2}>
          <FormLabel fontSize="sm">
            <Text as={"b"} color={"black.100"}>
              Enter your message
            </Text>
          </FormLabel>

          <Input
            className="input"
            type="text"
            name="data"
            rounded={"lg"}
            value={formData.data}
            onChange={handleInputChange}
            size="sm"
            placeholder="Enter data"
          />
        </FormControl>

        <Tabs
          mt={4}
          variant="enclosed-colored"
          isLazy
          size="sm"
          className="inputColor"
        >
          <TabList justifyContent={"space-around"} border={"none"}>
            <Tab
              className="inputTab a"
              fontSize="sm"
              border={"none"}
              rounded={"lg"}
            >
              Basic Settings
            </Tab>
            <Tab
              className="inputTab b"
              fontSize="sm"
              border={"none"}
              rounded={"lg"}
              ml={2}
            >
              Advanced Settings
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack spacing={2}>
                <FormControl>
                  <FormLabel fontSize="sm">Color</FormLabel>
                  <Input
                    className="colorSelect"
                    type="color"
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    size="sm"
                  />
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
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={2}>
                <FormControl>
                  <FormLabel fontSize="sm">Size</FormLabel>
                  <Slider
                    name="size"
                    min={200}
                    max={1000}
                    step={200}
                    defaultValue={200}
                    value={formData.size}
                    onChange={(value) =>
                      handleSliderChange("size", parseInt(value))
                    }
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
                  <FormLabel fontSize="sm">QZone (1-100)</FormLabel>
                  <Slider
                    name="qzone"
                    min={1}
                    max={100}
                    step={1}
                    defaultValue={1}
                    value={formData.qzone}
                    onChange={(value) =>
                      handleSliderChange("qzone", parseInt(value))
                    }
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb boxSize={4} />
                  </Slider>
                  <Text fontSize="xs" textAlign="center">
                    {formData.qzone}
                  </Text>
                </FormControl>

                <FormControl>
                  <FormLabel fontSize="sm">Margin (1-50)</FormLabel>
                  <Slider
                    name="margin"
                    min={1}
                    max={50}
                    step={1}
                    defaultValue={1}
                    value={formData.margin}
                    onChange={(value) =>
                      handleSliderChange("margin", parseInt(value))
                    }
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb boxSize={4} />
                  </Slider>
                  <Text fontSize="xs" textAlign="center">
                    {formData.margin}px
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
                    <option value="gif">GIF</option>
                    <option value="jpeg">JPEG</option>
                    <option value="jpg">JPG</option>
                    <option value="svg">SVG</option>
                    <option value="eps">EPS</option>
                  </Select>
                </FormControl>

                {/* Advanced Settings */}
                <FormControl>
                  <FormLabel fontSize="sm">
                    ECC (Error Correction Level)
                  </FormLabel>
                  <Select
                    name="ecc"
                    value={formData.ecc}
                    onChange={(e) =>
                      handleAdvancedChange("ecc", e.target.value)
                    }
                    size="sm"
                  >
                    <option value="L">Low</option>
                    <option value="M">Medium</option>
                    <option value="Q">Quartile</option>
                    <option value="H">High</option>
                  </Select>
                </FormControl>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Button
          className="submitBtn"
          size="sm"
          my={4}
          type="submit"
          onClick={() => toast("Click on the QR Code😉.")}
        >
          Generate QR Code
        </Button>
      </form>
    </Box>
  );
}
