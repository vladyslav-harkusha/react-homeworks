import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/main-layout/MainLayout.tsx";
import {UsersPage} from "../pages/users-page/UsersPage.tsx";
import {PostsPage} from "../pages/posts-page/PostsPage.tsx";
import {HomePage} from "../pages/home-page/HomePage.tsx";
import {CartsPage} from "../pages/carts-page/CartsPage.tsx";

export const router = createBrowserRouter([
    { path: '', element: <MainLayout />, children: [
            { index: true, element: <HomePage /> },
            { path: 'users', element: <UsersPage />, children: [
                { path: ':id/carts', element: <CartsPage /> },
            ]},
            { path: 'posts', element: <PostsPage /> },
        ],
    },
]);