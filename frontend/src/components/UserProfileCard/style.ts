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
        margin: 1.5rem 1rem;
        align-self: flex-start;
    }

    @media (min-width: 460px) {
            
        img {
            margin: 0 1rem;
            padding: 1.4rem 1rem;
        }

    }

    span {
        margin: 0;
        padding: 0;
        line-height: 16px;
    }

    .div-column {
        flex: 1;
        display: flex;
        flex-flow: nowrap column;
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
