import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type PropsType = {
    user: IUser;
}

export const User: FC<PropsType> = ({ user }) => {
    const { firstName, lastName, image, email } = user;

    return (
        <div>
            <h2 className='text-2xl font-bold'>{firstName} {lastName}</h2>
            <img className='w-24' src={image} alt={firstName + ' ' + lastName}/>
            <p>{email}</p>
        </div>
    );
};