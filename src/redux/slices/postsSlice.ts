import {IPost} from "../../models/IPost.ts";
import {createAsyncThunk, createSlice, isFulfilled, isPending, PayloadAction} from "@reduxjs/toolkit";
import {getAllEntities} from "../../services/api.service.ts";

type PostsStateType = {
    posts: IPost[];
    isPostsLoading: boolean;
}

const initialPostsState: PostsStateType = { posts: [], isPostsLoading: false };

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
    reducers: {
        handleIsPostsLoading: (state, action: PayloadAction<boolean>) => {
            state.isPostsLoading = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(loadAllPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;
        })
        .addCase(loadAllPosts.rejected, (state, action) => {
            console.log(state);
            console.log(action);
        })
        .addMatcher(isFulfilled(loadAllPosts), (state) => {
            state.isPostsLoading = false;
        })
        .addMatcher(isPending(loadAllPosts), (state) => {
            state.isPostsLoading = true;
        })
});

export const postsActions = { ...postsSlice.actions, loadAllPosts };
