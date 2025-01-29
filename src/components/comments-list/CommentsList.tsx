import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {Loader} from "../UI/loader/Loader.tsx";
import {commentsActions} from "../../redux/slices/commentsSlice.ts";
import {CommentItem} from "../comment-item/CommentItem.tsx";

export const CommentsList: FC = () => {
    const { comments, isCommentsLoading } = useAppSelector(state => state.commentsStoreSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commentsActions.loadAllComments());
    }, []);

    return (
        <div className='flex flex-col gap-5 justify-center items-center text-center'>
            <h2 className='text-2xl font-bold mt-5'>Comments list</h2>
            {isCommentsLoading
                ? <Loader />
                : (
                    <ul>
                        {comments.map(comment => (
                            <CommentItem key={comment.id} comment={comment} />
                        ))}
                    </ul>
                )
            }
        </div>
    );
};