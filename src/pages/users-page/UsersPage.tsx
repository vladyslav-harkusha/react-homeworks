import {FC} from "react";
import {UsersList} from "../../components/users-list/UsersList.tsx";
import {Pagination} from "../../components/pagination/Pagination.tsx";

export const UsersPage: FC = () => {
    return (
        <>
            <Pagination />
            <UsersList />
        </>
    );
};