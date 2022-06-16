import React from 'react';
import ParrotNavbar from '../../components/NavBar';
import CardPostFeed from '../../components/CardPostFeed';
import PostCommentCard from '../../components/PostCommentCard';
import usePost from '../../hooks/posts';
import useUser from '../../hooks/users';

const Feed: React.FC = () => {
    const userList = useUser();

    return (
        <>
            <ParrotNavbar />
            <PostCommentCard />
            <CardPostFeed users={userList} />
        </>
    )
}

export default Feed;