import React from 'react';
import * as RegForm from './style';
import { Form, Button } from 'react-bootstrap';
import logo from '../../assets/logo-parrot.png';


const RegisterUserForm: React.FC = () => {
    return (
        <>
            <RegForm.Container>
                <Form className='form m-2'>
                        <img className='img-fluid' src={logo} />
                        <h1>Cadastro</h1>
                    <Form.Group className='form-group'>
                        <Form.Control className='form-input' id='nome' type='text' placeholder='nome' />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Control className='form-input' id='email' type='text' placeholder='email' />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Control className='form-input' id='senha' type='password' placeholder='senha' />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Control className='form-input' id='confirma-senha' type='password' placeholder='confirmar senha' />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Control className='form-input' id='unidade-apartamento' type='text' placeholder='unidade/apartamento' />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Control className='form-input' id='link-foto' type='text' placeholder='link da foto' />
                    </Form.Group>
                    <Button className='button-signup' size='sm'>entrar</Button>
                </Form>
            </RegForm.Container>
        </>
    )
}

export default RegisterUserForm;