import React, { useState } from "react";
import "./Form.css";
import {
  Box,
  Button,
  ChakraProvider,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Stack,
  RadioGroup,
  Radio,
  Checkbox,
} from "@chakra-ui/react";

export default function QRCodeGeneratorForm() {
  const [data, setData] = useState("");
  const [imageUri, setImageUri] = useState("icon://appstore");
  const [innerEye, setInnerEye] = useState("circle");
  const [outerEye, setOuterEye] = useState("circle");
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [size, setSize] = useState(200);
  const [quietZone, setQuietZone] = useState(4);
  const [errorCorrection, setErrorCorrection] = useState("M");
  const [filename, setFilename] = useState("qrcode");
  const [format, setFormat] = useState("png");
  const [advancedSettings, setAdvancedSettings] = useState(false);

  const handleGenerateQRCode = () => {
    // Implement QR code generation logic here
    // You can access the form input values from the state variables
  };

  return (
    <ChakraProvider>
      <Box p={4} maxW="md" rounded={"lg"} mx="auto" className="Form">
        <FormControl mb={4} isRequired>
          <FormLabel>Data</FormLabel>
          <Input
            placeholder="Enter data"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </FormControl>

        <Checkbox
          mb={4}
          onChange={() => setAdvancedSettings(!advancedSettings)}
        >
          Show Advanced Settings
        </Checkbox>

        <Tabs isFitted variant="enclosed">
          <TabList mb={4}>
            <Tab>Basic Settings</Tab>
            <Tab>Advanced Settings</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <FormControl mb={4}>
                <FormLabel>Image URI (Optional)</FormLabel>
                <Input
                  placeholder="Enter image URI"
                  value={imageUri}
                  onChange={(e) => setImageUri(e.target.value)}
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Size</FormLabel>
                <Select
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                >
                  {[200, 400, 800, 1000].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                  <option value="custom">Custom</option>
                </Select>
                {size === "custom" && (
                  <Input
                    mt={2}
                    placeholder="Enter custom size"
                    type="number"
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                  />
                )}
              </FormControl>
            </TabPanel>
            <TabPanel>
              <FormControl mb={4}>
                <FormLabel>Inner Eye</FormLabel>
                <RadioGroup
                  value={innerEye}
                  onChange={(value) => setInnerEye(value)}
                >
                  <Stack direction="row">
                    <Radio value="circle">Circle</Radio>
                    <Radio value="square">Square</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Outer Eye</FormLabel>
                <RadioGroup
                  value={outerEye}
                  onChange={(value) => setOuterEye(value)}
                >
                  <Stack direction="row">
                    <Radio value="circle">Circle</Radio>
                    <Radio value="square">Square</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Background Color</FormLabel>
                <Input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Error Correction</FormLabel>
                <Select
                  value={errorCorrection}
                  onChange={(e) => setErrorCorrection(e.target.value)}
                >
                  <option value="L">Low</option>
                  <option value="M">Medium</option>
                  <option value="Q">Quartile</option>
                  <option value="H">High</option>
                </Select>
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Filename</FormLabel>
                <Input
                  placeholder="Enter filename"
                  value={filename}
                  onChange={(e) => setFilename(e.target.value)}
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Format</FormLabel>
                <Select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                >
                  <option value="svg">SVG</option>
                  <option value="jpg">JPG</option>
                  <option value="png">PNG</option>
                </Select>
              </FormControl>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Button colorScheme="teal" onClick={handleGenerateQRCode}>
          Generate QR Code
        </Button>
      </Box>
    </ChakraProvider>
  );
}
