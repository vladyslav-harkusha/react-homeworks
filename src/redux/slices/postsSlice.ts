import {IPost} from "../../models/IPost.ts";
import {createSlice} from "@reduxjs/toolkit";

type PostsStateType = {
    posts: IPost[];
}

const initialPostsState: PostsStateType = { posts: [] };

export const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: initialPostsState,
    reducers: {},
    extraReducers: builder => builder
});