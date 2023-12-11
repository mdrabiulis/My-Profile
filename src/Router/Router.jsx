import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import AboutMe from "../About Me/AboutMe";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";


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
          path: "/aboutme",
          element:<AboutMe></AboutMe>
        },
        {
          path: "/project",
          element:<Project></Project>
        },
        {
          path: "/contact",
          element:<Contact></Contact>
        },
      ]
    },
  ]);

export default Router;