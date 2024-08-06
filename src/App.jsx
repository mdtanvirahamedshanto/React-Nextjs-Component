// react router dom
import { createBrowserRouter } from "react-router-dom";

// components
import Signin from "../UI-Components/SingupLogin/Signin";
import Signup from "../UI-Components/SingupLogin/Signup";
import Home from "./components/Home";
import DevShow from "../UI-Components/DevShow/DevShow";

// creating the routes
export const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path : '/devshow',
    element : <DevShow />
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
