import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const Container = styled.div`
    display: flex;
    flex-flow: wrap row;
    width: 100%;
    max-width: 700px;
    background-color: #FFF;
    margin: 0 auto;
    border: 1px solid #C5C5C5;
    
    img {
        margin: 1.5rem 2rem;
        align-self: flex-start;
    }
    

    @media (min-width: 450px) {
            
        img {
            margin: 0 1rem;
            padding: 1.4rem 1rem;
        }

    }
`

export const ProfileContent = styled.div `
    flex: 1;
    display: flex;
    flex-flow: nowrap column;
    margin-top: 1rem;
    text-align: center;

    h4 {
        color: #76BB4C;
    }

    span {
        margin-bottom: 0.5em;
        padding: 0;
        line-height: 16px;
    }

    @media (min-width: 450px) {
        text-align: left;
        margin-bottom: 1rem;
    }
`


export const EditProfileButton = styled(Button)`
    background-color: #6033AA;
    border: none;
    border-radius: 30px;
    margin: 2rem 0;
    width: 100%;

    @media (min-width: 450px) {
        width: 100%;
        padding: 0 2rem;
        justify-self: flex-end;
        align-self: flex-start;
        margin: 1.4rem;
    }

    @media (min-width: 500px) {
        width: 160px;
    }
`
