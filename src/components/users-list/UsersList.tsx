import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {userService} from "../../services/api.service.ts";
import {User} from "../user/User.tsx";

export const UsersList = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const getUsersFromServer = async () => {
            const usersFromServer = await userService.getAllUsers();
            setUsers(usersFromServer.users);
        }

        getUsersFromServer();
    }, []);

    return (
        <ul className='flex flex-col gap-6 ml-5'>
            {users.map(user => (
                <User key={user.id} user={user} />
            ))}
        </ul>
    );
};