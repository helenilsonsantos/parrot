import React from 'react';
import ParrotNavbar from '../NavBar';
import CardPost from '../CardPost';
import PostCommentCard from '../PostCommentCard';

const MainPage: React.FC = () => {
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

export default MainPage;