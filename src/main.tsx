import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import '@fontsource-variable/mulish';
import 'flowbite';
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <App />
  </StrictMode>
);
