import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addpage from './Pages/Addpage/Addpage.jsx';
import Main from './Component/Main/Main.jsx';
import Viewpage from './Pages/ViewPage/Viewpage.jsx';
import Updatepage from './Pages/updatepage/Updatepage.jsx';
import AuthProvider from './context/Authprovider.jsx';
import Registration from './Pages/Registrationpage/Registration.jsx';
import Login from './Pages/Loginpage/Login.jsx';
import Home from './Pages/Home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element: <Home></Home>,

    },
      {
          path:"alldata",
          element: <Viewpage></Viewpage>,
          loader:({params}) => fetch(`http://localhost:5000/totalpage`)

      },
      {
        path:"addpage",
        element:<Addpage></Addpage>
      }
      ,
      {
        path:`updatedata/:id`,
        element:<Updatepage></Updatepage>,
        loader:({params}) => fetch(`http://localhost:5000/alldata/${params.id}`)
      }   ,
      {
        path:`registration`,
        element:<Registration></Registration>,
      } ,
      {
        path:`log`,
        element:<Login></Login>,
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
