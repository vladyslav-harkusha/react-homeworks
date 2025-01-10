import {IUsersResponse} from "../models/IUsersResponse.ts";
import {urls} from "../constants/urls.ts";
import {IPostsResponse} from "../models/IPostsResponse.ts";

export const userService = {
    getAllUsers: async (): Promise<IUsersResponse> => {
        const response = await fetch(urls.users.all);

        return response.json();
    },
};

export const postService = {
    getAllPosts: async (): Promise<IPostsResponse> => {
        const response = await fetch(urls.posts.all);

        return response.json();
    },
};