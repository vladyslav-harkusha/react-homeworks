import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type Props = {
    user: IUser;
}

export const UserItem:FC<Props> = ({ user }) => {
    const {id, firstName, lastName} = user;

    return (
        <li>
            <h2>{id} - {firstName} {lastName}</h2>
        </li>
    );
};