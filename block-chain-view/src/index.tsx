import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BlockChainProvider } from "./context";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ChakraProvider>
    <BlockChainProvider>
      <App />
    </BlockChainProvider>
  </ChakraProvider>
);

reportWebVitals();
