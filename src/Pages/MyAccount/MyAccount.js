import React from 'react';
import useAuth from '../hooks/useAuth';

const MyAccount = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>My Profile</h1> <br />
            {user?.email && <div>
                <img src={user.photoURL} alt="" />
                <h4>{user.displayName}</h4>
                <p>Email: {user.email}</p>
            </div>}

        </div >
    );
};

export default MyAccount;