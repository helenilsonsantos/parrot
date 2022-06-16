import React from 'react';
import * as Profile from './style';
import avatar from '../../assets/avatar.png';

const PostCommentCard: React.FC = () => {
    return (
            <Profile.Container>
                <img src={avatar} />
                <div className='div-column'>
                    <h4>Ziriguidunho Pipocante</h4>
                    <span>apê 82</span>
                    <span>user@mail.com</span>
                    <span>00 publicações</span>
                </div>
                <Profile.PostButton size='sm'>editar perfil</Profile.PostButton>
            </Profile.Container>
    )
}


export default PostCommentCard;