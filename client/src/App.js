import "./App.css";
import { Button, Stack } from "react-bootstrap";
import Main from "./components/Main";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const theme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
});
function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<Main />} />
            <Route path="/htu" element={<Main />} />
          </Routes>
          {/* The rest of your app goes here */}
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
