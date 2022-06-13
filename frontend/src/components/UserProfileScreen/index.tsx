import React from 'react';
import * as Profile from './style';
import avatar from '../../assets/avatar.png';
import { Button } from 'react-bootstrap';

const UserProfile: React.FC = () => {
    return (
        <Profile.Container>
            <img src={avatar} />
            <Profile.ProfileContent>
                <Profile.ProfileHeader>
                    <span className='username'>Nome Sobrenome</span>
                    <Button className='button' size='sm'>editar perfil</Button>
                </Profile.ProfileHeader>
                <Profile.ProfileBody>
                    <span className='userinfo'>apê 82</span>
                    <span className='userinfo'>mail@mail.com</span>
                </Profile.ProfileBody>
            </Profile.ProfileContent>
            {/* <div className='button'></div> */}
        </Profile.Container>
    )
}


export default UserProfile;