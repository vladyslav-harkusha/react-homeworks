import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type Props = {
    user: IUser;
}

export const UserItem: FC<Props> = ({ user: {id, name, email} }) => {
    return (
        <li className='mb-2'>
            <h3 className='font-bold'>{id} -- {name}</h3>
            <p>{email}</p>
        </li>
    );
};