import React from 'react';
import ParrotNavbar from '../../components/NavBar';
import CardPostFeed from '../../components/CardPostFeed';
import PostCommentCard from '../../components/PostCommentCard';
import usePosts from '../../hooks/posts';

const Feed: React.FC = () => {
    const {
        postList,
        handleAddPost
    } = usePosts();

    return (
        <>
            <ParrotNavbar />
            <PostCommentCard postMessage={handleAddPost}/>
            <CardPostFeed posts={postList} />
        </>
    )
}

export default Feed;