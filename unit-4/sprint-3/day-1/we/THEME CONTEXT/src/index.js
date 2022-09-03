import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import AppContextProvideComponent from "./Contex/ContexProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppContextProvideComponent>
      <App />
    </AppContextProvideComponent>
  </StrictMode>
);
