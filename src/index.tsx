import { createRoot } from "react-dom/client";
import { App } from "./app/app";
import "./styles.css";

const container = document.getElementById("container");
if (container) {
	const root = createRoot(container);
	root.render(<App />);
}
