import {IUser} from "../../models/IUser.ts";
import {createSlice} from "@reduxjs/toolkit";

type UsersStateType = {
    users: IUser[];
}

const initialUsersState: UsersStateType = { users: [] };

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: initialUsersState,
    reducers: {},
    extraReducers: builder => builder
});