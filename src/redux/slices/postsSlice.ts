import {IPost} from "../../models/IPost.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAllEntities} from "../../services/api.service.ts";

type PostsStateType = {
    posts: IPost[];
}

const initialPostsState: PostsStateType = { posts: [] };

const loadAllPosts = createAsyncThunk('loadAllPosts', async (_, thunkAPI) => {
    try {
        const posts = await getAllEntities<IPost[]>('/posts');

        return thunkAPI.fulfillWithValue(posts);
    } catch (e) {
        return thunkAPI.rejectWithValue(`fetch posts error: ${e}`);
    }
});

export const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: initialPostsState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadAllPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;
        })
        .addCase(loadAllPosts.rejected, (state, action) => {
            console.log(state);
            console.log(action);
        })
});

export const postsActions = { ...postsSlice.actions, loadAllPosts };
