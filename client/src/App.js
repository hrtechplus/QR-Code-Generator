import "./App.css";
import { Button, Stack } from "react-bootstrap";
import Main from "./components/Main";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/" element={<Main />} />
            <Route path="/" element={<Main />} />
          </Routes>
          {/* The rest of your app goes here */}
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
