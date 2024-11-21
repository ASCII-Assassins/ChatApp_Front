import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Signup from "../Pages/Auth/Signup";
import Signin from "../Pages/Auth/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);
export default router;
