import React from 'react';
import * as PostComment from './style';
import avatar from '../../assets/avatar.png';
import CardPost from '../CardPost';

const PostCommentCard: React.FC = () => {
    return (
        <>
            <PostComment.Container>
                <img src={avatar} />
                <PostComment.CommentForm>
                    <PostComment.TextArea as='textarea' rows={3} />
                    <PostComment.PostButton size='sm'>publicar</PostComment.PostButton>
                </PostComment.CommentForm>
            </PostComment.Container>
            <CardPost />
            <CardPost />
            <CardPost />
            <CardPost />
            <CardPost />
            <CardPost />
            <CardPost />
        </>
    )
}


export default PostCommentCard;