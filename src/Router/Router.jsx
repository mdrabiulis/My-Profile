import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import AboutMe from "../About Me/AboutMe";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path: "/ab",
          element:<AboutMe></AboutMe>
        },
      ]
    },
  ]);

export default Router;