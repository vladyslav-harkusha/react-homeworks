import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {Loader} from "../UI/loader/Loader.tsx";
import {usersActions} from "../../redux/slices/usersSlice.ts";
import {UserItem} from "../user-item/UserItem.tsx";

export const UsersList: FC = () => {
    const { users, isUsersLoading } = useAppSelector(state => state.usersStoreSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(usersActions.loadAllUsers());
    }, []);

    return (
        <div className='flex flex-col gap-5 justify-center items-center'>
            <h2 className='text-2xl font-bold mt-5'>Users list</h2>
            {isUsersLoading
                ? <Loader />
                : (
                    <ul>
                        {users.map(user => (
                            <UserItem key={user.id} user={user} />
                        ))}
                    </ul>
                )
            }
        </div>
    );
};