import React from "react";
import { createRoot } from "react-dom/client";
import { Content } from "./components/Content";
import { Dashboard } from "./components/Dashboard";
import "./styles.css";

function App() {
  return (
    <div>
      <Content />
      <Dashboard />
    </div>
  );
}

const container = document.getElementById("container");
const root = createRoot(container);
root.render(<App />);
