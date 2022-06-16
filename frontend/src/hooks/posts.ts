import { useEffect, useState } from "react";
import { renderPosts } from "../services/Posts";
import { Post } from "../@types";

const usePost = () => {
    const [postList, setPostList] = useState<Post[]>([] as Post[]);

    useEffect(() => {
        renderPosts().then(posts => setPostList(posts));
    }, [setPostList])

    // const [postListById, setPostListByID] = useState<Post[]>([] as Post[]);

    // useEffect(() => {
    //     renderPostsById().then(posts => setPostListByID(posts))
    // })



    return postList
}

export default usePost;