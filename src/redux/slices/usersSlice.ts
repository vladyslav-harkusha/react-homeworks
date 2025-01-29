import {IUser} from "../../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAllEntities} from "../../services/api.service.ts";

type UsersStateType = {
    users: IUser[];
}

const initialUsersState: UsersStateType = { users: [] };

const loadAllUsers = createAsyncThunk('loadAllUsers', async (_, thunkAPI) => {
    try {
        const users = await getAllEntities<IUser[]>('/users');

        return thunkAPI.fulfillWithValue(users);
    } catch (e) {
        return thunkAPI.rejectWithValue(`fetch users error: ${e}`);
    }
});

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: initialUsersState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadAllUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        })
        .addCase(loadAllUsers.rejected, (state, action) => {
            console.log(state);
            console.log(action);
        })
});

export const usersActions = { ...usersSlice.actions, loadAllUsers };