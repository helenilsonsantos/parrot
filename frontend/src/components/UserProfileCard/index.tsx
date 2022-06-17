import React from 'react';
import * as Profile from './style';
import avatar from '../../assets/avatar.png';

const PostCommentCard: React.FC = () => {


    return (
            <Profile.Container>
                <img src={avatar} />
                <Profile.ProfileContent>
                    <h4>Usuário Teste</h4>
                    <span>apê 1020</span>
                    <span>email@email.com</span>
                    <span>00 publicações</span>
                </Profile.ProfileContent>
                <Profile.EditProfileButton size='sm'>editar perfil</Profile.EditProfileButton>
            </Profile.Container>
    )
}


export default PostCommentCard;