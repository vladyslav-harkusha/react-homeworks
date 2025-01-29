import {Route, Routes} from "react-router-dom";
import {App} from "../App.tsx";
import {HomePage} from "../pages/home-page/HomePage.tsx";
import {UsersPage} from "../pages/users-page/UsersPage.tsx";
import {PostsPage} from "../pages/posts-page/PostsPage.tsx";
import {CommentsPage} from "../pages/comments-page/CommentsPage.tsx";
import {ComplexPage} from "../pages/complex-page/ComplexPage.tsx";
import {FC} from "react";

export const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path='' element={ <App /> } >
                <Route index element={ <HomePage /> } />
                <Route path='/users' element={ <UsersPage /> } />
                <Route path='/posts' element={ <PostsPage /> } />
                <Route path='/comments' element={ <CommentsPage /> } />
                <Route path='/complex' element={ <ComplexPage /> } />
            </Route>
        </Routes>
    );
};