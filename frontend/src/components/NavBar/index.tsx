import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import * as PNav from './style';

import navbarLogo from '../../assets/navbar-logo.png';
import navbarLogoMobile from '../../assets/logo-mobile.png';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../../store';
import { logOut } from "../../store/users";


const ParrotNavbar = () => {
    const dispatch = useDispatch()
    const userLogout =() => {
        dispatch(logOut())
    }
    const user = useSelector((store: RootStore) => store.usersSlice);

    return (    
        <PNav.StyledNavbar bg='light'>
            <Container>
                <Navbar.Brand href="#home">
                    <picture>
                        <source media="(min-width: 465px)" srcSet={navbarLogo} />
                        <img src={navbarLogoMobile} style={{width: '80%'}}/>
                    </picture>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <PNav.StyledNavbarText>
                        <span>Olá, {user.nome}</span><span className='separator'> | </span> <PNav.StyledLink onClick={userLogout} href='/'>sair</PNav.StyledLink>
                    </PNav.StyledNavbarText>
                </Navbar.Collapse>
            </Container>
        </PNav.StyledNavbar>
    )
}


export default ParrotNavbar;