import React from 'react';
import * as PostComment from './style';
import avatar from '../../assets/avatar.png';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { RootStore } from '../../store';
import { Post } from '../../@types';

interface AddPostsProps {
    postMessage: (users: Omit<Post, 'id'>) => void
}


const PostCommentCard: React.FC<AddPostsProps> = ({ postMessage }) => {
    
    const userName = useSelector((store: RootStore) => store.usersSlice.nome) as string;
    const userEmail = useSelector((store: RootStore) => store.usersSlice.email) as string;
    const userApartment = useSelector((store: RootStore) => store.usersSlice.apartamento) as unknown;

    const formik = useFormik({
        initialValues: {
            id: '',
            nome: '',
            email: '',
            apartment: '',
            comentario: ''
        },
        onSubmit: async (values, { resetForm }) => {
            const data = await postMessage({...values, nome: userName, email: userEmail, apartment: userApartment as string })
            resetForm();
        }
    })

    return (
            <PostComment.Container>
                <img src={avatar} />
                <PostComment.CommentForm onSubmit={formik.handleSubmit}>
                    <PostComment.TextArea as='textarea' id='comentario' placeholder='Publique sua mensagem' rows={3} value={formik.values.comentario} onChange={formik.handleChange} />
                    <PostComment.PostButton size='sm' type='submit'>publicar</PostComment.PostButton>
                </PostComment.CommentForm>
            </PostComment.Container>
    )
}


export default PostCommentCard;