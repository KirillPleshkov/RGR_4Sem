import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../../Styles.css"

const ModalLogin = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton/>

                <Modal.Body>
                    <div style={{padding: "1rem"}}>

                        <Modal.Title id="contained-modal-title-vcenter"
                                     style={{textAlign: 'center', fontSize: 30, width: "100%", marginLeft: "5 rem"}}>
                            Авторизация
                        </Modal.Title>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail" style={{width: "90%", margin: "auto"}}>
                                <div style={{height: "2rem"}}/>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingInputCustom"
                                        type="email"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(value) => {
                                            setEmail(value.target.value)
                                        }}
                                    />
                                    <label htmlFor="floatingInputCustom">Электронная почта</label>
                                </Form.Floating>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail" style={{width: "90%", margin: "auto"}}>
                                <div style={{height: "1rem"}}/>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingPasswordCustom"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(value) => {
                                            setPassword(value.target.value)
                                        }}
                                    />
                                    <label htmlFor="floatingPasswordCustom">Пароль</label>
                                </Form.Floating>
                            </Form.Group>

                            <div style={{height: "1rem"}}/>
                            <Button variant="outline-success" size="lg" className="button_login" onClick={props.onHide}>
                                Войти
                            </Button>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalLogin;