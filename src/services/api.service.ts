// import {IPost} from "../models/IPost.ts";
// import {IUser} from "../models/IUser.ts";
// import {IComment} from "../models/Comment.ts";

const baseURL = import.meta.env.VITE_API_BASE_URL;

// export const usersService = {
//     getAllUsers: async (): Promise<IUser[]> => {
//         const response = await fetch(`${baseURL}/users`);
//         return response.json();
//     },
// };
//
// export const postsService = {
//     getAllPosts: async (): Promise<IPost[]> => {
//         const response = await fetch(`${baseURL}/posts`);
//         return response.json();
//     },
// };
//
// export const commentsService = {
//     getAllComments: async (): Promise<IComment[]> => {
//         const response = await fetch(`${baseURL}/comments`);
//         return response.json();
//     },
// };

export const getAllEntities = async <T>(endpointUrl: string) => {
    const response = await fetch(baseURL + endpointUrl);
    return await response.json() as T;
}
