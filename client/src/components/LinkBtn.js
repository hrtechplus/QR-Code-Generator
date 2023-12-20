import React from "react";
import "./LinkBtn.css";
import { Box } from "@chakra-ui/react";
export default function LinkBtn({ img }) {
  return (
    <Box className="toggle">
      <input type="checkbox" />
      <div className="button"></div>
      <div className="label icon-container">{img}</div>
    </Box>
  );
}
