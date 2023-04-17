import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 import Main from './componet/Layout/Main';
import Home from './componet/Home/Home';
import OrderRevieo from './componet/OrderReview/OrderRevieo';
import Grandpa from './componet/Grandpa/Grandpa';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('teshirts.json')
      },
     
      {
        path:'review',
        element:<OrderRevieo></OrderRevieo>
      },
      {
        path:'/grandap',
        element:<Grandpa></Grandpa>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}/>
  </React.StrictMode>,
)
