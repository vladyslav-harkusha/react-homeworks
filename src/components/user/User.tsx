import {FC} from "react";
import {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router-dom";

type PropsType = {
    user: IUser;
}

export const User: FC<PropsType> = ({ user }) => {
    const { firstName, lastName, id } = user;
    const navigate = useNavigate();

    const onClickNavigate = () => {
        navigate(`/users/${id}/carts`);
    };

    return (
        <li className='flex justify-between bg-amber-100'>
            <div>
                <h2 className='text-2xl'>{id} - {firstName} {lastName}</h2>
            </div>
            <button
                onClick={onClickNavigate}
                className='border-2 border-amber-500 p-1 bg-amber-200'
            >
                User carts
            </button>
        </li>
    );
};