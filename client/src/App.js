import "./App.css";
import { Button, Stack } from "react-bootstrap";
import Main from "./components/Main";
import About from "./components/About";
import Instrcution from "./components/Instrcution";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Fade } from "react-awesome-reveal";
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
            <Route
              path="/"
              element={
                <Fade cascade damping={0.1}>
                  <Main />
                </Fade>
              }
            />
            <Route
              path="/instructions"
              element={
                <Fade cascade damping={0.1}>
                  <Instrcution />
                </Fade>
              }
            />
            <Route
              path="/about"
              element={
                <Fade cascade damping={0.1}>
                  <About />
                </Fade>
              }
            />
          </Routes>
          <Toaster />
          {/* The rest of your app goes here */}
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
