import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

//Pages
import App from "./App.jsx";
import Home from "./Pages/Home";
import Performace_Test from "./Pages/Performace Test";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

//React-Router-DOM
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="Performance_Test" element={<Performace_Test />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
