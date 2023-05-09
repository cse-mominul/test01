import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Sells from "../Pages/Sells";
import Main from "../Layout/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/demo2',
        element: <Sells></Sells>
      }
    ],
  },
]);

export default routes;
