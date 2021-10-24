import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeFirebase from "../Firebase/Firebase.init";
initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginerror, setLoginError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }
    const registerNewUser = () => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {

        });

    }

    const loginUser = () => {
        return signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {

        user,
        setUser,
        setName,
        setEmail,
        registerNewUser,
        setUserName,
        password,
        setPassword,
        error,
        setError,
        loginUser,
        setLoginEmail,
        setLoginPassword,
        setLoginError,
        loginerror,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;