import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home/Home";
import Main from "../pages/Main";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../pages/NewsDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                index: true, path: '/',
                Component: Main,
            },
            {
                path: "/category/:id",
                Component: CategoryNews,
                loader: () => fetch("/news.json"),
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                Component: Login
            },
            {
                path:  "/auth/register",
                Component: Register
            }
        ]
    },
    {
        path: "/news-details/:id",
        element:<NewsDetails></NewsDetails>,
         loader: () => fetch("/news.json"),
    },
    {
        path: '/*',
        element: <h1>Iam error Page</h1>
    }
])
export default router;