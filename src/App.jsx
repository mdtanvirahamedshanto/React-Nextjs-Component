// react router dom
import { createBrowserRouter } from "react-router-dom";

// components
import Signin from "../UI-Components/SingupLogin/Signin";
import Signup from "../UI-Components/SingupLogin/Signup";
import Home from "./components/Home";

// creating the routes
export const App = createBrowserRouter([
  //! /* ----------------------------- auth routes ----------------------------- */
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/singup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);
