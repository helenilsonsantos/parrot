import React from 'react';
import ParrotNavbar from '../../components/NavBar';
import CardPost from '../../components/CardPost';
import PostCommentCard from '../../components/PostCommentCard';

const Feed: React.FC = () => {
    return (
        <>
            <ParrotNavbar />
            <PostCommentCard />
            <CardPost />
            <CardPost />
            <CardPost />
            <CardPost />
        </>
    )
}

export default Feed;