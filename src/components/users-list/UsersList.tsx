import {FC, useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {usersService} from "../../services/api.user.services.ts";
import {UserItem} from "../user-item/UserItem.tsx";
import {useSearchParams} from "react-router-dom";

export const UsersList:FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [searchParams] = useSearchParams({ page: '1', limit: '10'});

    useEffect(() => {
        const currPage = searchParams.get('page') || '1';
        const usersPerPage = searchParams.get('limit') || '10';
        const getUsersFromServer = async () => {
            const usersFromServer = await usersService.getUsersByPage(+currPage, +usersPerPage);
            setUsers(usersFromServer.users);
        }
        getUsersFromServer();
    }, [searchParams]);

    return (
        <>
            <h2 className='pl-5 mt-2 font-bold'>Users list:</h2>
            <ul className='p-5'>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </ul>
        </>
    );
};