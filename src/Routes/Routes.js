import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SignUp from "../layout/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Sign2 from "../Pages/SignUp/Sign2";
import Sign3 from "../Pages/SignUp/Sign3";
import Sign4 from "../Pages/SignUp/Sign4";
import Sign5 from "../Pages/SignUp/Sign5";
import SignUp1 from "../Pages/SignUp/SignUp1";
import SignUp2 from "../Pages/SignUp/SignUp2";
import SignUp3 from "../Pages/SignUp/SignUp3";
import SignUp4 from "../Pages/SignUp/SignUp4";
import Signup5 from "../Pages/SignUp/Signup5";
import SignUp6 from "../Pages/SignUp/SignUp6";
import SignUp7 from "../Pages/SignUp/SignUp7";
import SignUp8 from "../Pages/SignUp/SignUp8";
import SignUp9 from "../Pages/SignUp/SignUp9";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>
    },
    {
        path:'/signup',
        element:<SignUp></SignUp>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/signup',
                element:<SignUp1></SignUp1>,
            },
            {
                path:'/signup/1',
                element:<SignUp2></SignUp2>,
            },
            {
                path:'/signup/2',
                element:<SignUp3></SignUp3>
            },
            {
                path:'/signup/3',
                element:<SignUp4></SignUp4>
            },
            {
                path:'/signup/4',
                element:<Signup5></Signup5>
            },
            {
                path:'/signup/5',
                element:<SignUp6></SignUp6>
            },
            {
                path:'/signup/6',
                element:<SignUp7></SignUp7>
            },
            {
                path:'/signup/7',
                element:<SignUp8></SignUp8>
            },
            {
                path:'/signup/8',
                element:<SignUp9></SignUp9>
            },
            {
                path:'/signup/11',
                element:<Sign2></Sign2>
            },
            {
                path:'/signup/12',
                element:<Sign3></Sign3>
            },
            {
                path:'/signup/13',
                element:<Sign4></Sign4>
            },
            {
                path:'/signup/14',
                element:<Sign5></Sign5>
            },
        ]
    }
])