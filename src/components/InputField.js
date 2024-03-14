import React from "react";
import { Box, Input } from "@chakra-ui/react";
export default function InputField({
  placeholder,
  type,
  name,
  value,
  onChange,
  size = "sm",
}) {
  return (
    <Box>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        size={size}
        placeholder={placeholder}
      />
    </Box>
  );
}
