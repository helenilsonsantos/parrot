import styled from "styled-components";
import { Button, Form } from 'react-bootstrap';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    img {
        align-self: center;
    }
    h1 {
        text-transform: uppercase;
    }
    @media (min-width: 460px) {
        h1 {
            font-size: 1.5rem;
            margin-bottom:  3.4rem;
        }
    }
`
export const RegForm = styled(Form)`
    display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: center;
    width: 30.438rem;
    max-width: 31rem;
    background-color: #FFF;
    border: 1px solid #C5C5C5;
`

export const RegFormGroup = styled(Form.Group)`
    width: 71%;
    padding: 0.25rem;

    @media (min-width: 460px) { 
        padding-bottom: 1rem;
    }
`

export const RegFormInput = styled(Form.Control)`
    border: 1px solid #909090;
    border-radius: 10px;

    &::placeholder {
        text-align:center;
        font-size: 1.1rem;
    }

    @media (min-width: 460px) {
        &::placeholder {
            font-size: 1.5rem;
        }
    }
`

export const StyledButton = styled(Button)`
        z-index: 1;
        position: relative;
        border: none;
        background-color: #76BB4C;
        width: 69%;
        font-size: 1.1rem;
        color: #000;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 10px;
        margin: 0.5rem 0;

        &:after {
            content: '';
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 300ms ease-in;
        }
        
        &:hover {
            background-color: #76BB4C;
            color: #FFF;
        }

        &:hover::after {
            transform: scaleX(1);
            transform-origin: left;
        }

        &:focus {
            background-color: #76BB4C;
        }

        @media (min-width: 460px) {
            font-size: 1.5rem;
            margin: 2rem 0;
        }
`
export const StyledErrorMessage = styled.div`
    color: #FF3333;
    padding-left: 0.5rem;
    font-weight: 700;
    `
