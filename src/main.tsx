import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/home-page/HomePage.tsx";
import {UsersPage} from "./pages/users-page/UsersPage.tsx";
import {PostsPage} from "./pages/posts-page/PostsPage.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path='' element={ <App /> } >
                <Route index element={ <HomePage /> } />
                <Route path='/users' element={ <UsersPage /> } />
                <Route path='/posts' element={ <PostsPage /> } />
            </Route>
        </Routes>
    </BrowserRouter>
);