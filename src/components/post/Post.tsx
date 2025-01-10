import {FC} from "react";
import {IPost} from "../../models/IPost.ts";

type PropsType = {
    post: IPost;
};

export const Post: FC<PropsType> = ({ post }) => {
    const { title, body } = post;

    return (
        <li className='mb-5 bg-green-100'>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p>{body}</p>
        </li>
    );
};