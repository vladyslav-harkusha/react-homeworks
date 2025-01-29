import {FC} from "react";
import {IPost} from "../../models/IPost.ts";

type Props = {
    post: IPost;
}

export const PostItem: FC<Props> = ({ post: {id, title, body} }) => {
    return (
        <li className='mb-4'>
            <h3 className='font-bold'>{id} -- {title}</h3>
            <p>{body}</p>
        </li>
    );
};