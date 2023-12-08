
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Course from "../Pages/Course/Course";
import PremiumAccess from "../Pages/PremiumAccess/PremiumAccess";
import PrivateRoute from "./PrivateRoutes";
import FAQ from "../Pages/FAQ/FAQ";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import StudentReview from "../Pages/Banner/StudentReview";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/courseDetails.json'),
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
            },
            {
                path: '/premium/:id',
                element: <PrivateRoute><PremiumAccess></PremiumAccess></PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/faq",
                element: <FAQ></FAQ>,
            },
            {
                path: "/blog",
                element: <PrivateRoute><Blog></Blog></PrivateRoute>,
            },
            {
                path: "/reviews",
                element: <PrivateRoute><StudentReview></StudentReview></PrivateRoute>,
            },
        ]
    },
]);

export default router;