import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Explore from "../pages/explore";
import Notifications from "../pages/notifications";
import NotFound from "../pages/notFound";
import MainLayout from "../layouts/main";
import store from "../store/index.js";
import Profile from "../pages/profile/index.jsx";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "explore",
                element: <Explore />
            },
            {
                path: "notifications",
                element: <Notifications />
            },
            {
                path: ':slug',
                element: <Profile />
            },
            {
                path: "*",
                element: <NotFound />
            },
        ]
    },


])