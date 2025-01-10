import {IUsersResponse} from "../models/IUsersResponse.ts";
import {urls} from "../constants/urls.ts";
import {IPostsResponse} from "../models/IPostsResponse.ts";
import {IUser} from "../models/IUser.ts";
import {ICartsResponse} from "../models/ICartsResponse.ts";

export const userService = {
    getAllUsers: async (): Promise<IUsersResponse> => {
        const response = await fetch(urls.users.all);
        return response.json();
    },
    getUserById: async (id: number): Promise<IUser> => {
        const response = await fetch(urls.users.byId(id));
        return response.json();
    }
};

export const postService = {
    getAllPosts: async (): Promise<IPostsResponse> => {
        const response = await fetch(urls.posts.all);
        return response.json();
    },
};

export const cartService = {
    getCartsByUserId: async (userId: number): Promise<ICartsResponse> => {
        const response = await fetch(urls.carts.byUserId(userId));
        return response.json();
    }
}