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
import UpdateProfile from '../pages/updateProfile/UpdateProfile';
import Support from '../pages/support/Support';
import UserOrder from '../pages/userOrder/UserOrder';

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
            },
            {
                path: "/update-profile",
                element: <PrivetRouts> <UpdateProfile></UpdateProfile></PrivetRouts>
            },
            {
                path: "/support",
                element: <Support></Support>
            },
            {
                path:"/user-order",
                element:<PrivetRouts><UserOrder></UserOrder></PrivetRouts>
            }
        ]
    }
])

export default Router;