import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home/Home";
import Main from "../pages/Main";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children:[
            {
                index:true, path:'/',
                Component:Main,
            },
            {
                path:"/category/:id",
                Component: CategoryNews,
               loader: () => fetch("/news.json"),
            }
        ]
    },
    {
        path: '/auth',
        element: <h1>Authentication</h1>
    },
    {
        path: "/news",
        element: <h1>all news are here</h1>
    },
    {
        path: '/*',
        element: <h1>Iam error Page</h1>
    }
])
export default router;