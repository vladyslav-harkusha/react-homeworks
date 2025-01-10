import {FC} from "react";
import {UsersList} from "../../components/users-list/UsersList.tsx";
import {Outlet} from "react-router-dom";

export const UsersPage: FC = () => {
    return (
        <div className='flex'>
            <UsersList/>
            <Outlet />
        </div>
    );
};