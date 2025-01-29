import {configureStore} from "@reduxjs/toolkit";
import {usersSlice} from "./slices/usersSlice.ts";
import {postsSlice} from "./slices/postsSlice.ts";
import {commentsSlice} from "./slices/commentsSlice.ts";
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        usersStoreSlice: usersSlice.reducer,
        postsStoreSlice: postsSlice.reducer,
        commentsStoreSlice: commentsSlice.reducer
    }
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<typeof store.getState>();