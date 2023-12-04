import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Manu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/signUp/signUp";

import Detailes from "../Pages/Detailes/Detailes";
import CarItems from "../Pages/Manu/CarItems";
import AddProduct from "../Pages/AddProduct/AddProduct";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/addProduct',
          element: <AddProduct></AddProduct>
        },
        {
          path: `/carItems/:name`,
          element: <CarItems></CarItems>,
          loader: ()=> fetch('https://car-store-server-theta.vercel.app/brandItems') 
        }, 
        {
          path: '/myCart',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        { 
          path: `/detailes/:id`,
          element: <Detailes></Detailes>,
          loader: ({params})=> fetch(`https://car-store-server-theta.vercel.app/brandItems/${params.id}`)
        }
      ]
    },
  ]);
  