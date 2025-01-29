import {IComment} from "../../models/Comment.ts";
import {createSlice} from "@reduxjs/toolkit";

type CommentsStateType = {
    comments: IComment[];
}

const initialCommentsState: CommentsStateType = { comments: [] };

export const commentsSlice = createSlice({
    name: 'commentSlice',
    initialState: initialCommentsState,
    reducers: {},
    extraReducers: builder => builder
});