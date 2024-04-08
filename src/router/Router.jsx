import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Structure from '../pages/structure/Structure';
import Home from '../pages/home/Home';
import Error from '../pages/error/Error';

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Structure></Structure>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])

export default Router;