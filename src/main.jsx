import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { myNewTheme } from "./Theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={myNewTheme.config.initialColorMode} />
    <ChakraProvider theme={myNewTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
