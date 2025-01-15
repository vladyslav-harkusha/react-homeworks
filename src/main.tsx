import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/home-page/HomePage.tsx";
import {CarsPage} from "./pages/cars-page/CarsPage.tsx";
import {NewCarPage} from "./pages/new-car-page/NewCarPage.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path='' element={ <App /> } >
                <Route index element={ <HomePage /> } />
                <Route path='/cars' element={ <CarsPage /> } />
                <Route path='/cars/add-new-car' element={ <NewCarPage /> } />
            </Route>
        </Routes>
    </BrowserRouter>
);