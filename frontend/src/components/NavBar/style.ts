import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`

    @media (min-width: 450px) {
        img {
            width: 50%;
        }
    }
`

export const StyledNavbarText = styled.span`
    margin: 0;
    padding: 0;
    line-height: 1.3rem;
    font-size: 1.2rem;
    color: #76BB4C;

    @media (min-width: 450px) {
        font-size: 1.5rem;
    }
`

export const StyledLink = styled.a`
    color: #6033aa;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
        color: #6033aa;
    }

    &:focus {
        color: #6033AA;
    }
`