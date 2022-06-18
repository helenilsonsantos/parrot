import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import { User } from '../../@types';

interface ModalEditUserProps {
    show: User
    onHide: () => void
    updateUser: (id: number, users: Omit<User, 'id' | 'password' | 'permission'>) => void
}


const ModalEditUser: React.FC<ModalEditUserProps> = ({ show, onHide, updateUser }) => {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            nome: show.nome,
            apartment: show.apartment,
            email: show.email,
        },
        onSubmit: values => {
            updateUser(show.id, {
                nome: values.nome,
                apartment: values.apartment,
                email: values.email
            })
            onHide()
        }
    })
    
    return (
    <Modal show={Object.keys(show).length > 0} onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-5">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control id="nome" type="text" placeholder="Nome completo" value={formik.values.nome} onChange={formik.handleChange} />
                </Form.Group>
                <Form.Group className="mb-5">
                    <Form.Label>Apartamento/Unidade</Form.Label>
                    <Form.Control id="apartment" type="text" placeholder="Apartamento/Unidade" value={formik.values.apartment} onChange={formik.handleChange} />
                </Form.Group>
                <Form.Group className="mb-5">
                    <Form.Label>Email</Form.Label>
                    <Form.Control id="email" type="email" placeholder="Seu email" value={formik.values.email} onChange={formik.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Button variant="success" type="submit" style={{ marginRight: 15 }}>Salvar</Button>
                    <Button variant="danger" onClick={formik.handleReset}>Resetar</Button>
                </Form.Group>
            </Form>
        </Modal.Body>
    </Modal>
    );
}

export default ModalEditUser;