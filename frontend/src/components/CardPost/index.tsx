import React from 'react';
import * as Post from './style';
import avatar from '../../assets/avatar.png';


const CardPost: React.FC = () => {
    return (
        <Post.CardContainer>
            <img src={avatar} />
            <Post.CardText>
                <span className='username'>Nome - apê 82</span>
                <span className='timestamp'>10/10/2022 16:00</span>
                <p>Poxa galera, vamos respeitar o horário de silêncio! Tinha alguém usando a furadeira 2 HORAS DA MANHÃ!</p>
            </Post.CardText>
        </Post.CardContainer>
    )
}


export default CardPost;