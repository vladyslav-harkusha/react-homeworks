import {FC} from "react";
import {useFetchData} from "../../hooks/useFetchData.tsx";
import {urls} from "../../constans/urls.ts";
import {IPostsResponse} from "../../models/IPostsResponse.ts";

export const Posts: FC = () => {
    const postsData = useFetchData<IPostsResponse>((urls.baseUrl + urls.posts));

    return (
        <ul>
            {postsData && postsData.posts.map(post => (
                <li key={post.id}>{post.id} - {post.title}</li>
            ))}
        </ul>
    );
};