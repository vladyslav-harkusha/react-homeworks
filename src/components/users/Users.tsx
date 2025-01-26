import {FC} from "react";
import {useFetchData} from "../../hooks/useFetchData.tsx";
import {urls} from "../../constans/urls.ts";
import {IUsersResponse} from "../../models/IUsersResponse.ts";

export const Users: FC = () => {
    const usersData = useFetchData<IUsersResponse>((urls.baseUrl + urls.users));

    return (
        <ul>
            {usersData && usersData.users.map(user => (
                <li key={user.id}>{user.id} - {user.firstName}</li>
            ))}
        </ul>
    );
};