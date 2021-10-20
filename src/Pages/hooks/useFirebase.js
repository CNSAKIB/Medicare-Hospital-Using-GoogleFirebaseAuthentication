import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeFirebase from "../Firebase/Firebase.init";
initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
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
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;