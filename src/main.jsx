import App from "./App";
import "./index.css";
import ReactDOM from "react-dom/client";
import Level3Home from "./Components/Level3/Level3Home";
import Level1Home from "./Components/Level1/Level1Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/level3", element: <Level3Home /> },
      { path: "/level1", element: <Level1Home /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
