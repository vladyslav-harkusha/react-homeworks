import { FC } from "react";
import './App.css';
import {NavMenu} from "./components/nav-menu/NavMenu.tsx";
import {Outlet} from "react-router-dom";

export const App: FC = () => {

    return (
      <>
          <NavMenu />
          <Outlet />
      </>
    );
};
