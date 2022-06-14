import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import * as PNav from './style';

import navbarLogo from '../../assets/navbar-logo.png';


const ParrotNavbar = () => {

    return (    
        <PNav.StyledNavbar bg='light'>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={navbarLogo} className='img-fluid' />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <PNav.StyledNavbarText>
                        <span>Olá Usuário</span><span className='d-none d-md-inline'> | </span> <PNav.StyledLink href='#'>sair</PNav.StyledLink>
                    </PNav.StyledNavbarText>
                </Navbar.Collapse>
            </Container>
        </PNav.StyledNavbar>
    )
}


export default ParrotNavbar;