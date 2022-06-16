import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import { postAddUser } from '../../services/User';
import * as Yup from 'yup';

import * as RF from './style';
import logo from '../../assets/logo-parrot.png';


const RegisterUserForm: React.FC = () => {
    
    const schema = Yup.object({
        nome: Yup.string().required('Campo Nome é obrigatório'),
        email: Yup.string().email('E-mail não é válido').required('Campo E-mail é obrigatório'),
        senha: Yup.string().required('Campo Senha é obrigatório').min(6, 'Senha deve ter pelo menos 6 caracteres.'),
        confirmaSenha: Yup.string().required('Campo Confirmar Senha é obrigatório').oneOf([Yup.ref('senha'), null], 'As senhas digitadas devem ser iguais.'),
        apartament: Yup.string().required('Campo Unidade/Apartamento é obrigatório'),
        foto: Yup.string().required('Link para foto é obrigatório')
    
    })

    return (
        <Formik

            validationSchema={schema}
            initialValues={{
                nome: '',
                email: '',
                senha: '',
                confirmaSenha: '',
                apartament: '',
                foto: '',
                admin: false
            }}
            onSubmit={values => {
                postAddUser(values);
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
            <RF.Container>
                <RF.RegForm className='m-2' onSubmit={handleSubmit}>
                        <img className='img-fluid' src={logo} />
                        <h1>Cadastro</h1>
                    <RF.RegFormGroup>
                        <RF.RegFormInput
                            name='nome'
                            id='nome'
                            type='text'
                            placeholder='nome'
                            value={values.nome}
                            onChange={handleChange}
                            isValid={touched.nome && !errors.nome}
                            isInvalid={touched.nome && !!errors.nome}
                        />
                        <ErrorMessage name='nome' component={RF.StyledErrorMessage}/>
                    </RF.RegFormGroup>
                    <RF.RegFormGroup>
                        <RF.RegFormInput
                            name='email'
                            id='email'
                            type='text'
                            placeholder='email'
                            value={values.email}
                            onChange={handleChange}
                            isValid={touched.email && !errors.email}
                            isInvalid={touched.email && !!errors.email}
                        />
                        <ErrorMessage name='email' component={RF.StyledErrorMessage}/>
                    </RF.RegFormGroup>
                    <RF.RegFormGroup>
                        <RF.RegFormInput
                            name='senha'
                            id='senha'
                            type='password'
                            placeholder='senha'
                            value={values.senha}
                            onChange={handleChange}
                            isValid={touched.senha && !errors.senha}
                            isInvalid={touched.senha && !!errors.senha}
                        />
                        <ErrorMessage name='senha' component={RF.StyledErrorMessage}/>
                    </RF.RegFormGroup>
                    <RF.RegFormGroup>
                        <RF.RegFormInput
                            name='confirmaSenha'
                            id='confirma-senha'
                            type='password'
                            placeholder='confirmar senha'
                            value={values.confirmaSenha}
                            onChange={handleChange}
                            isValid={touched.confirmaSenha && !errors.confirmaSenha}
                            isInvalid={touched.confirmaSenha && !!errors.confirmaSenha}
                        />
                        <ErrorMessage name='confirmaSenha' component={RF.StyledErrorMessage}/>
                    </RF.RegFormGroup>
                    <RF.RegFormGroup>
                        <RF.RegFormInput
                            name='apartament'
                            id='unidade-apartamento'
                            type='text'
                            placeholder='unidade/apartamento'
                            value={values.apartament}
                            onChange={handleChange}
                            isValid={touched.apartament && !errors.apartament}
                            isInvalid={touched.apartament && !!errors.apartament}
                        />
                        <ErrorMessage name='apartment' component={RF.StyledErrorMessage}/>
                    </RF.RegFormGroup>
                    <RF.RegFormGroup>
                        <RF.RegFormInput
                            name='foto'
                            id='foto'
                            type='text'
                            placeholder='link da foto'
                            value={values.foto}
                            onChange={handleChange}
                            isValid={touched.foto && !errors.foto}
                            isInvalid={touched.foto && !!errors.foto}
                        />
                        <ErrorMessage name='foto' component={RF.StyledErrorMessage}/>
                    </RF.RegFormGroup>
                    <RF.RegFormGroup>
                        <RF.RegFormInput
                            name='admin'
                            id='admin'
                            type='text'
                            placeholder='admin'
                            value={values.admin = false}
                            onChange={handleChange}
                            isValid={touched.admin && !errors.admin}
                            isInvalid={touched.admin && !!errors.admin}
                            style={{display: 'none'}}
                        />
                        <ErrorMessage name='admin' component={RF.StyledErrorMessage}/>
                    </RF.RegFormGroup>
                    <RF.StyledButton size='sm' type='submit'>entrar</RF.StyledButton>
                </RF.RegForm>
            </RF.Container>
            )}
        </Formik>
    )
}

export default RegisterUserForm;