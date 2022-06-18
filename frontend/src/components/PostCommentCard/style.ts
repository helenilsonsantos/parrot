import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';

export const Container = styled.div`
    display: flex;
    flex-flow: nowrap row;
    width: 100%;
    max-width: 700px;
    background-color: #FFF;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    border: 1px solid #C5C5C5;
    
    img {
        margin: 1.5rem 1rem;
        align-self: flex-start;
    }

    @media (min-width: 460px) {
            
        img {
            margin: 0 1rem;
            padding: 1.4rem 1rem;
        }

    }
`

export const CommentForm = styled(Form)`
    display: flex;
    flex-flow: nowrap column;
    flex: 1;
    padding-right: 2rem;
`

export const TextArea = styled(Form.Control)`
    border-color: #8BC34A;
    border-radius: 10px;
    resize: none;
    margin-top: 1rem;

    &:focus {
        border-color: #6033AA; 
    }
`

export const PostButton = styled(Button)`
    background-color: #6033AA;
    border: none;
    border-radius: 30px;
    margin: 1rem 0 2rem 0;

    @media (min-width: 450px) {
        width: 160px;
        padding: 0 2rem;
        justify-self: flex-end;
        align-self: flex-end;
    }
`
