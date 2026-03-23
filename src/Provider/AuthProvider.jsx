import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth/cordova';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const auth = getAuth(app)
// for user login*********************
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const CreateUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    };
    // for user logout functionality*************************
    const logOut = () => {
        return signOut(auth).then(() => {
            alert('Sign-out successful')
        }).catch((error) => {
            console.log(error);

        });
    }

    // for user login**************************

    const SingIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
           
    }

    useEffect(() => {
        const UnSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            UnSubscribe()
        }
    }, [])

    const Authdata = {
        user,
        setUser,
        CreateUser,
        logOut,
        SingIn
    }
    return <AuthContext value={Authdata}>{children}</AuthContext>;
};

export default AuthProvider;