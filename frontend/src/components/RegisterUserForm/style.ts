import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    img {
        align-self: center;
    }

    h1 {
        font-size: 1.5rem;
        text-transform: uppercase;
    }

    input::placeholder {
        text-align:center;
        font-size: 1.2rem;
    }

    .form {
    display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: center;
    width: 30.438rem;
    max-width: 31rem;
    background-color: #FFF;
    border: 1px solid #C5C5C5;
    }

    .form-group {
        width: 71%;
        padding: 0.25rem;
    }

    .form-input {
        border: 1px solid #909090;
        border-radius: 10px;
    }

    .button-signup {
        z-index: 1;
        position: relative;
        border: none;
        background-color: #76BB4C;
        width: 71%;
        font-size: 1.2rem;
        color: #000;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 10px;
    }

    .button-signup::after {
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


    .button-signup:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }

    .button-signup:hover {
        color: #FFF;
    }

    @media (min-width: 460px) {
        input::placeholder {
            font-size: 1.5rem;
        }
        
        .form-group {
            padding-bottom: 1rem;
        }

        .button-signup {
            font-size: 1.5rem;
            margin: 2rem 0;
        }

        h1 {
            margin-bottom:  3.4rem;
        }
    }
`