import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Courseware from "../Pages/Home/Projects/Courseware/Courseware";
import MotorMania from "../Pages/Home/Projects/MotorMania/MotorMania";
import Photography from "../Pages/Home/Projects/Photography/Photography";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/motor-mania',
                element: <MotorMania></MotorMania>
            },
            {
                path: '/photography',
                element: <Photography></Photography>
            },
            {
                path: '/courseware',
                element: <Courseware></Courseware>
            },
        ]
    },


])