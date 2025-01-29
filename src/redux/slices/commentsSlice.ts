import {IComment} from "../../models/Comment.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAllEntities} from "../../services/api.service.ts";

type CommentsStateType = {
    comments: IComment[];
}

const initialCommentsState: CommentsStateType = { comments: [] };

const loadAllComments = createAsyncThunk('loadAllComments', async (_, thunkAPI) => {
    try {
        const comments = await getAllEntities<IComment[]>('/comments');

        return thunkAPI.fulfillWithValue(comments);
    } catch (e) {
        return thunkAPI.rejectWithValue(`fetch comments error: ${e}`);
    }
});

export const commentsSlice = createSlice({
    name: 'commentSlice',
    initialState: initialCommentsState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadAllComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload;
        })
        .addCase(loadAllComments.rejected, (state, action) => {
            console.log(state);
            console.log(action);
        })
});

export const commentsActions = { ...commentsSlice.actions, loadAllComments };
