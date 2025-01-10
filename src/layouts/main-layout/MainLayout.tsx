import {FC} from "react";
import {Outlet} from "react-router-dom";
import {NavMenu} from "../../components/nav-menu/NavMenu.tsx";

export const MainLayout: FC = () => {
    return (
        <>
            <NavMenu />
            <hr/>
            <Outlet />
        </>
    );
};