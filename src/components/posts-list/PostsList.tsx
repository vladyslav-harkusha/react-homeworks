import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {Loader} from "../UI/loader/Loader.tsx";
import {postsActions} from "../../redux/slices/postsSlice.ts";
import {PostItem} from "../post-item/PostItem.tsx";

export const PostsList: FC = () => {
    const { posts, isPostsLoading } = useAppSelector(state => state.postsStoreSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postsActions.loadAllPosts());
    }, []);

    return (
        <div className='flex flex-col gap-5 justify-center items-center'>
            <h2 className='text-2xl font-bold mt-5'>Posts list</h2>
            {isPostsLoading
                ? <Loader />
                : (
                    <ul>
                        {posts.map((post) => (
                            <PostItem key={post.id} post={post} />
                        ))}
                    </ul>
                )
            }
        </div>
    );
};