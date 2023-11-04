import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signOut} from "firebase/auth";


import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const Authcontext = createContext()

const AuthProvider = ({children}) => {
    const [loading,setloading]=useState(true)
    const [user,setuser]=useState(null)

const createusers = (email,password)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const signin = (email,password) =>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut = () => {
    setloading(true);
    return signOut(auth);
}
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setuser(currentUser);
        console.log('current user', currentUser);
    });
    return () => {
        return unsubscribe();
    }
}, [])


    const items = {
        user,
        createusers,
        signin,
        logOut,
        loading,
    }
    return (
        <Authcontext.Provider value={items}>{children}</Authcontext.Provider>
    );
};

export default AuthProvider;