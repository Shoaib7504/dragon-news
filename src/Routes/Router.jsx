import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home/Home";
import Main from "../pages/Main";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../pages/Loading";

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
                hydrateFallbackElement: <Loading></Loading>
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
                path: "/auth/register",
                Component: Register
            }
        ]
    },
    {
        path: "/news-details/:id",
        element: <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path: '/*',
        element: <h1>Iam error Page</h1>
    }
])
export default router;