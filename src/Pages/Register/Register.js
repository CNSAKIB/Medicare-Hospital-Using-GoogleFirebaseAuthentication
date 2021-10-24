import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const { setName, setEmail, password, setPassword, setError, error, registerNewUser, setUserName } = useAuth()

    const handleName = e => {
        setName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);

    }
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'
    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be Atleast 6 characters with 1 uppercase(A-Z)')
            return;
        }
        if (!/(?=.*?[A-Z])/.test(password)) {
            setError('Password must be Atleast 6 characters with 1 uppercase(A-Z)')
            return;
        }
        registerNewUser()
            .then((result) => {
                const user = result.user;
                history.push(redirect_uri);
                setError('');
                setUserName();
                window.location.reload(false);

            })
            .catch((error) => {
                setError(error.message);
            });

    }
    return (
        <div>
            <h1>Register Now</h1>
            <form className="reg-form" onSubmit={handleRegistration}>
                <input onBlur={handleName} required placeholder="Username" type="text" /> <br />
                <input onBlur={handleEmail} required placeholder="Email" type="email" /> <br />
                <input onBlur={handlePassword} required placeholder="Password" type="password" />
                <div className="text-danger" >{error}</div>
                <button className="mt-4 common-button" type="submit">Register</button> <br />
                <Link className="mt-5" to="/login">Alredy have an Account?</Link>
            </form>
        </div>
    );
};

export default Register;