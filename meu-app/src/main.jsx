import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AUTH from "./pages/auth/index.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AUTH />
    </StrictMode>
);
