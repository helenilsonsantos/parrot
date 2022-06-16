import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

import * as LG from './style';
import logo from '../../assets/logo-parrot.png';


const FormLogin: React.FC = () => {
    
    const schema = Yup.object({
        email: Yup.string().email('E-mail não é válido').required('Campo E-mail é obrigatório'),
        senha: Yup.string().required('Campo Senha é obrigatório').min(6, 'Senha deve ter pelo menos 6 caracteres.')
    })    
    return (
        <Formik

            validationSchema={schema}
            initialValues={{
                nome: '',
                email: '',
                senha: '',
                confirmaSenha: '',
                apartment: '',
                foto: '',
                admin: false
            }}
            onSubmit={values => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
            <LG.Container>
                <LG.LoginForm className='m-2' onSubmit={handleSubmit}>
                        <img className='img-fluid' src={logo} />
                        <h1>Login</h1>
                    <LG.LoginFormGroup>
                        <LG.LoginFormInput
                            name='email'
                            id='email'
                            type='text'
                            placeholder='email'
                            value={values.email}
                            onChange={handleChange}
                            isValid={touched.email && !errors.email}
                            isInvalid={touched.email && !!errors.email}
                        />
                        <ErrorMessage name='email' component={LG.StyledErrorMessage}/>
                    </LG.LoginFormGroup>
                    <LG.LoginFormGroup>
                        <LG.LoginFormInput
                            name='senha'
                            id='senha'
                            type='password'
                            placeholder='senha'
                            value={values.senha}
                            onChange={handleChange}
                            isValid={touched.senha && !errors.senha}
                            isInvalid={touched.senha && !!errors.senha}
                        />
                        <ErrorMessage name='senha' component={LG.StyledErrorMessage}/>
                    </LG.LoginFormGroup>
                    <LG.StyledButton size='sm' type='submit'>entrar</LG.StyledButton>
                <LG.SignUpLink>
                    <a href='/signup'>cadastre-se</a>
                </LG.SignUpLink>
                </LG.LoginForm>
            </LG.Container>
            )}
        </Formik>
    )
}

export default FormLogin;