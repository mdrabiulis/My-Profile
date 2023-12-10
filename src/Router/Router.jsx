import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path: "/a",
          element:<Home></Home>
        }
      ]
    },
  ]);

export default Router;