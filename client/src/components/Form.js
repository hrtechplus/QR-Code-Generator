import React from "react";
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

export default function QRCodeForm({
  handleFormSubmit,
  handleInputChange,
  handleSliderChange,
  handleAdvancedChange,
  formData,
}) {
  return (
    <Box p={2} maxW={["100%", "300px"]} mx="auto">
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
                  <FormLabel fontSize="sm">Color</FormLabel>
                  <Input
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

                <FormControl>
                  <FormLabel fontSize="sm">QZone (1-100)</FormLabel>
                  <Input
                    type="number"
                    name="qzone"
                    value={formData.qzone}
                    onChange={handleInputChange}
                    min={1}
                    max={100}
                    size="sm"
                  />
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
                    onChange={handleSliderChange}
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
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Button colorScheme="teal" size="sm" mt={2} type="submit">
          Generate QR Code
        </Button>
      </form>
    </Box>
  );
}
