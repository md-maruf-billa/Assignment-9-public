import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Structure from '../pages/structure/Structure';
import Home from '../pages/home/Home';
import Error from '../pages/error/Error';
import Login from '../pages/login/Login';
import Details from '../pages/details/Details';

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Structure></Structure>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
            ,
            {
                path:"/details/:id",
                element:<Details></Details>
            }
        ]
    }
])

export default Router;