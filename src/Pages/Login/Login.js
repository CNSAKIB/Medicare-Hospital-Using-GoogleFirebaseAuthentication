import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Login.css'


const Login = () => {
    const { loginUser, setLoginEmail, setLoginPassword, setLoginError,
        loginerror, signInUsingGoogle } = useAuth()
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'

    const handleLoginEmail = e => {
        setLoginEmail(e.target.value)
    }

    const handleLoginPassword = e => {
        setLoginPassword(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        loginUser()
            .then((result) => {
                history.push(redirect_uri);;

                setLoginError('');
                if (result) {
                    alert("Successfully Logged in");
                }
            })
            .catch((error) => {
                setLoginError(error.message);


            });
    }
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri);
                if (result) {
                    alert("Successfully Logged in");
                }
            }).catch((error) => {

                setLoginError(error.message);

            })

    }
    return (
        <div>
            <Form className="form-container mt-4 w-25 mx-auto" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control onBlur={handleLoginEmail} type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Pass
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control onBlur={handleLoginPassword} type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={10}>
                        </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        {loginerror}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit" className="common-button" >Login</Button>
                    </Col>
                </Form.Group>
                <button onClick={handleGoogleLogin} className="me-3 common-button" >Sign in with Google</button>
                <Link to='/register'>Create an account?</Link>
            </Form>

        </div>

    );
};

export default Login;