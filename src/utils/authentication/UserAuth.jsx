import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/FireBase.confing';



export const userInfoContext = createContext()

const UserAuth = ({ children }) => {
    const [currentUser, setCurrentUser] = useState([]);
    const [loading, setLoading] = useState(true);



    // --------------- Create Account Using Email and Password--------
    const signInWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }



    // --------------Log In user with email and password-----
    const logInUserWithEmailAndPassword = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }



    // --------------Log Out user-------------------------
    const LogOutUser = () => {
        setCurrentUser([])
        return signOut(auth)
    }

    // -----------Current User ------------------
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setCurrentUser(user)
                setLoading(false)
            }
        })
        return () => {
            unsubscribe
        }
    }, [])


    const value = {
        signInWithEmail,
        currentUser,
        loading,
        LogOutUser,
        logInUserWithEmailAndPassword

    }
    return (
        <userInfoContext.Provider value={value}>
            {children}
        </userInfoContext.Provider>
    );
};

export default UserAuth;