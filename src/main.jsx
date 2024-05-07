// Dependencies
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// CSS 
import './globals.css'

// Routes
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Contato from "./pages/Contato";
import SobreNos from "./pages/SobreNos";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "politica",
    element: <Policy />,
  },
  {
    path: "contato",
    element: <Contato />,
  },
  {
    path: "sobre-nos",
    element: <SobreNos />,
  },
  {
    path: "termos",
    element: <Terms />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);