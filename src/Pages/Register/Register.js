import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './Register.css'

const Register = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const user = result.user;
                history.push(redirect_uri);
                console.log(user);
                setError('')
            })
            .catch((error) => {
                setError(error.message);

            });

    }
    return (
        <div>
            <h1>Register Now</h1>
            <form className="reg-form" onSubmit={handleRegistration}>
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