import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/FireBase.confing';



export const userInfoContext = createContext()

const UserAuth = ({ children }) => {
    const [currentUser, setCurrentUser] = useState([]);
    const [loading, setLoading] = useState(true);



    // --------------- Create Account Using Email and Password--------
    const signInWithEmailAndPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
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
        signInWithEmailAndPassword,
        currentUser,
        loading,
        LogOutUser

    }
    return (
        <userInfoContext.Provider value={value}>
            {children}
        </userInfoContext.Provider>
    );
};

export default UserAuth;