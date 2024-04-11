import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Structure from '../pages/structure/Structure';
import Home from '../pages/home/Home';
import Error from '../pages/error/Error';
import Login from '../pages/login/Login';
import Details from '../pages/details/Details';
import Registration from '../pages/registration/Registration';
import PrivetRouts from '../privet-routes/PrivetRouts';
import UserProfile from '../pages/userProfile/UserProfile';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Structure></Structure>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>

            },
            {
                path: "/registration",
                element: <Registration></Registration>
            }
            ,
            {
                path: "/details/:id",
                element: <PrivetRouts><Details></Details></PrivetRouts>
            },
            {
                path: "/user-profile",
                element: <PrivetRouts><UserProfile></UserProfile></PrivetRouts>
            }
        ]
    }
])

export default Router;