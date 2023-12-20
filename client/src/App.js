import "./App.css";
import { Button, Stack } from "react-bootstrap";
import Main from "./components/Main";
import About from "./components/About";
import Instrcution from "./components/Instrcution";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
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
            <Route path="/instructions" element={<Instrcution />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Toaster />
          {/* The rest of your app goes here */}
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
