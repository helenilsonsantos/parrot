import React from 'react';
import * as PostFeed from './style';
import avatar from '../../assets/avatar.png';
import { User } from '../../services/Posts';

interface UserFeedProps {
    users: User[];
}


const CardPostFeed: React.FC<UserFeedProps> =  ({ users }) => {
    return (
            <PostFeed.CardContainer>
                {users.map(user => (
                <div key={user.idUser}>
                <img src={avatar} />
                <PostFeed.CardText>
                    <span className='username'>{user.nome}</span>
                    <span className='username'>{user.email}</span>
                    <span className='username'>{user.apartament}</span>
                    <span className='timestamp'>10/10/2022 16:00</span>
                    {/* <p>{post.comentario}</p> */}
                </PostFeed.CardText>
                </div>
                ))}
            </PostFeed.CardContainer>
            
    )
}

export default CardPostFeed;