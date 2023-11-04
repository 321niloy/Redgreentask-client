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

        if(currentUser && currentUser.email){
            const loguser = {
                email:currentUser.email
              }
            fetch('http://localhost:5000/jwt',{
                method:"POST",
                headers:{
                  'content-type':'application/json'
                },
                body:JSON.stringify(loguser)
              })
              .then(res => res.json())
              .then(data =>{
                console.log('jwt response', data)
                // locla storage is not safe place it is second safe place
                localStorage.setItem("redgreen-token", data.token)
               
              })
             
        }
        else{
            localStorage.removeItem('redgreen-token')
          }



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