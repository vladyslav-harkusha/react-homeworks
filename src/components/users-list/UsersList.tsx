import {FC, useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {Pagination} from "../pagination/Pagination.tsx";
import {usersService} from "../../services/api.user.services.ts";
import {UserItem} from "../user-item/UserItem.tsx";

export const UsersList:FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [usersPerPage, setUsersPerPage] = useState<number>(10);
    const [page, setPage] = useState<number>(1)

    const usersPerPageHandler = (newValue: number) => {
        setUsersPerPage(newValue);
    }

    const pageHandler = (newPage: number) => {
        setPage(newPage);
    }

    useEffect(() => {
        const getUsersFromServer = async () => {
            const usersFromServer = await usersService.getUsersByPage(page, usersPerPage);
            setUsers(usersFromServer.users);
        }
        getUsersFromServer();
    }, [page, usersPerPage]);

    return (
        <>
            <Pagination
                page={page}
                usersPerPage={usersPerPage}
                usersPerPageHandler={usersPerPageHandler}
                pageHandler={pageHandler}
            />

            <h2 className='pl-5 mt-2 font-bold'>Users list:</h2>
            <ul className='p-5'>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </ul>
        </>
    );
};