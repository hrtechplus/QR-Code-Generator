import React from "react";
import { Box, Input } from "@chakra-ui/react";
export default function (placeholder, type, value) {
  return (
    <Box>
      <Input placeholder={placeholder} type={type} value={value} />
    </Box>
  );
}
