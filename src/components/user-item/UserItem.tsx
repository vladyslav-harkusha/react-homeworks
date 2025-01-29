import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type Props = {
    user: IUser;
}

export const UserItem: FC<Props> = ({ user: {id, name, email} }) => {
    return (
        <li className='mb-2'>
            <h3 className='text-2xl font-bold text-red-800 p-5 bg-blue-500'>User: {id} -- {name}</h3>
            <p>{email}</p>
        </li>
    );
};