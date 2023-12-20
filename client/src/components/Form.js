import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Fade, Hinge } from "react-awesome-reveal";
import { Tooltip } from "@chakra-ui/react";
import {
  Box,
  Button,
  Divider,
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
import { InfoIcon, InfoOutlineIcon } from "@chakra-ui/icons";
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
                  <FormLabel fontSize="sm">
                    Color{" "}
                    <Tooltip
                      hasArrow
                      label="Color of the eyes"
                      bg="gray.300"
                      color="black"
                    >
                      <InfoOutlineIcon />
                    </Tooltip>
                  </FormLabel>
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
                  <FormLabel fontSize="sm">
                    Background Color{" "}
                    <Tooltip
                      hasArrow
                      label="Color of the background "
                      bg="gray.300"
                      color="black"
                    >
                      <InfoOutlineIcon />
                    </Tooltip>
                  </FormLabel>
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
                  <FormLabel fontSize="md" color={"#4A5568"} as={"b"}>
                    Size{" "}
                    <Tooltip
                      hasArrow
                      label="Size of the QR code image"
                      bg="gray.300"
                      color="black"
                    >
                      <InfoOutlineIcon />
                    </Tooltip>
                  </FormLabel>
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
                  <FormLabel fontSize="md" color={"#4A5568"} as={"b"}>
                    QZone{" "}
                    <Tooltip
                      hasArrow
                      label="Thickness of a margin - (1-100)"
                      bg="gray.300"
                      color="black"
                    >
                      <InfoOutlineIcon />
                    </Tooltip>
                  </FormLabel>
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
                  <FormLabel fontSize="md" color={"#4A5568"} as={"b"}>
                    Margin{" "}
                    <Tooltip
                      hasArrow
                      label="Thickness of a margin in pixels (1-50)"
                      bg="gray.300"
                      color="black"
                    >
                      <InfoOutlineIcon />
                    </Tooltip>{" "}
                  </FormLabel>
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
                <Divider bg="black" px="4" orientation="horizontal"></Divider>
                <FormControl>
                  <FormLabel fontSize="md" color={"#4A5568"} as={"b"}>
                    Format{" "}
                    <Tooltip
                      hasArrow
                      label="Image Output Format"
                      bg="gray.300"
                      color="black"
                    >
                      <InfoOutlineIcon />
                    </Tooltip>
                  </FormLabel>
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
                  <FormLabel fontSize="md" color={"#4A5568"} as={"b"}>
                    ECC{" "}
                    <Tooltip
                      hasArrow
                      label="Error Correction"
                      bg="gray.300"
                      color="black"
                    >
                      <InfoOutlineIcon />
                    </Tooltip>
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
