import logo from "./logo.svg";
import "./App.css";
import { Button, Stack } from "react-bootstrap";
import Main from "./components/Main";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Main />
      </ChakraProvider>
    </div>
  );
}

export default App;
