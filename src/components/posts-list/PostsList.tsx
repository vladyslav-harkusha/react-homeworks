import {FC, useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import {postService} from "../../services/api.service.ts";
import {Post} from "../post/Post.tsx";

export const PostsList: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        const getPostsFromServer = async () => {
            const postsFromServer = await postService.getAllPosts();
            setPosts(postsFromServer.posts);
        }

        getPostsFromServer();
    }, []);

    return (
        <ul>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </ul>
    );
};