import {IComment} from "../../models/Comment.ts";
import {createAsyncThunk, createSlice, isFulfilled, isPending, PayloadAction} from "@reduxjs/toolkit";
import {getAllEntities} from "../../services/api.service.ts";

type CommentsStateType = {
    comments: IComment[];
    isCommentsLoading: boolean;
}

const initialCommentsState: CommentsStateType = { comments: [], isCommentsLoading: false };

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
    reducers: {
        handleIsCommentsLoading: (state, action: PayloadAction<boolean>) => {
            state.isCommentsLoading = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(loadAllComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload;
        })
        .addCase(loadAllComments.rejected, (state, action) => {
            console.log(state);
            console.log(action);
        })
        .addMatcher(isFulfilled(loadAllComments), (state) => {
            state.isCommentsLoading = false;
        })
        .addMatcher(isPending(loadAllComments), (state) => {
            state.isCommentsLoading = true;
        })
});

export const commentsActions = { ...commentsSlice.actions, loadAllComments };
