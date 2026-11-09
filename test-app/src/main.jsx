import { createRoot } from "react-dom/client";
import "./index.css";
import app from "app.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
