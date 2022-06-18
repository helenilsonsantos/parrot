import { useEffect, useState } from "react";
import { addMessage, renderPosts } from "../services/Posts";
import { Post } from "../@types";

const usePosts = () => {
    const [postList, setPostList] = useState<Post[]>([] as Post[]);

    useEffect(() => {
        renderPosts().then(posts => setPostList(posts));
    }, [setPostList])

    const handleAddPost = async (post: Omit<Post, 'id'>) => {
        const newPost = await addMessage(post)
        setPostList(
            oldPostList => [...oldPostList, newPost]
        )
    }



    return {
        postList,
        handleAddPost
    }
}

export default usePosts;