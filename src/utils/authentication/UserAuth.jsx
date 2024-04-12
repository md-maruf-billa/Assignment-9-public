import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/FireBase.confing';



export const userInfoContext = createContext();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const UserAuth = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);



    // --------------- Create Account Using Email and Password--------
    const signInWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }



    // --------------Log In user with email and password-----
    const logInUserWithEmailAndPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // -------------Sing up with google account-----------
    const logIngWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

    // -------------Sign up with gitHub---------
    const logInWithGitHub = () =>{
        return signInWithPopup(auth,githubProvider)
    }

    // -------------Sign up with Facebook----------
    const logInWithFaceBook =()=>{
        return signInWithPopup(auth,facebookProvider)
    }
    // ------------Sign Up with Twitter
    const logInWithTwitter = () =>{
        return signInWithPopup(auth,twitterProvider)
    }
    // --------------Log Out user-------------------------
    const LogOutUser = () => {
        setLoading(true)
        setCurrentUser(null)
        return signOut(auth)
    }

    // -----------Current User ------------------
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            setLoading(false)

        })
        return () => {
            unsubscribe();
        }
    }, [currentUser])


    const value = {
        signInWithEmail,
        currentUser,
        loading,
        LogOutUser,
        logInUserWithEmailAndPassword,
        logIngWithGoogle,
        logInWithGitHub,
        logInWithFaceBook,
        logInWithTwitter

    }
    return (
        <userInfoContext.Provider value={value}>
            {children}
        </userInfoContext.Provider>
    );
};

export default UserAuth;