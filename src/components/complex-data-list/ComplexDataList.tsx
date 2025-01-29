import {useAppSelector} from "../../redux/store.ts";
import {UserItem} from "../user-item/UserItem.tsx";
import {PostItem} from "../post-item/PostItem.tsx";
import {CommentItem} from "../comment-item/CommentItem.tsx";

export const ComplexDataList = () => {
    const {
        usersStoreSlice: {users},
        postsStoreSlice: {posts},
        commentsStoreSlice: {comments}
    } = useAppSelector(state => state);

    if (!users.length || !posts.length || !comments.length) {
        return (
            <p className='text-3xl mt-10 text-center'>You have to visit Users, Posts and Comments pages first</p>
        )
    }

    const postsWithComments = posts.map(post => ({
        ...post,
        commentsOfPost: comments.filter(comment => comment.postId === post.id)
    }));

    const usersWithPostsAndComments = users.map(user => ({
        ...user,
        postsOfUser: postsWithComments.filter(postWithComments => postWithComments.userId === user.id)
    }));

    return (
        <div className='text-center'>
            <h1 className='text-3xl font-bold mb-5'>Complex data</h1>
            <ul>
                {usersWithPostsAndComments.map(complexUser => (
                    <li key={complexUser.id} className='bg-blue-300 w-11/12 m-auto'>
                        <UserItem user={complexUser} />
                        <p className='text-2xl font-bold mb-2'>Posts of this user:</p>
                        {complexUser.postsOfUser.map(post => (
                            <li key={post.id} className='bg-yellow-200 w-11/12 m-auto'>
                                <PostItem post={post} />
                                <p className='text-2xl'>Comments of this post:</p>
                                {post.commentsOfPost.map(comment => (
                                    <li key={comment.id} className='bg-violet-100 w-11/12 m-auto'>
                                        <CommentItem comment={comment} />
                                    </li>
                                ))}
                            </li>
                        ))}

                    </li>
                ))}
            </ul>
        </div>
    );
};