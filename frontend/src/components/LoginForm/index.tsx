import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { baseUrl } from '../../services/config';
import { signInUser } from '../../services/User';
import * as Yup from 'yup';
import { logIn } from '../../store/users';

import * as LG from './style';
import logo from '../../assets/logo-parrot.png';


const FormLogin: React.FC = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const schema = Yup.object({
        email: Yup.string().email('E-mail não é válido').required('Campo E-mail é obrigatório'),
        password: Yup.string().required('Campo Senha é obrigatório').min(6, 'Senha deve ter pelo menos 6 caracteres.')
    })    
    return (

        //   onSubmit: async values => {

        //   }
        <Formik
            validationSchema={schema}
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={async values => {
                const {accessToken, user} = await signInUser(values);
                dispatch(logIn({accessToken, permission: user.permission, user}));
                //@ts-ignore
                baseUrl.defaults.headers["Authorization"] = `Bearer ${accessToken}`
                navigate("/feed")
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
                            name='password'
                            id='senha'
                            type='password'
                            placeholder='senha'
                            value={values.password}
                            onChange={handleChange}
                            isValid={touched.password && !errors.password}
                            isInvalid={touched.password && !!errors.password}
                        />
                        <ErrorMessage name='password' component={LG.StyledErrorMessage}/>
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