import {FC} from "react";
import {IComment} from "../../models/Comment.ts";

type Props = {
    comment: IComment;
}

export const CommentItem: FC<Props> = ({ comment: {id, name, body} }) => {
    return (
        <li className='mb-4'>
            <h3 className='font-bold'>{id} -- {name}</h3>
            <p>{body}</p>
        </li>
    );
};