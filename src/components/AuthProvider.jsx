import React, { createContext, useState } from 'react';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Firebase.init"


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const registerUser = (email , password)=>{
         createUserWithEmailAndPassword(auth ,email,password)
         .then(result => console.log(result.user))
         .catch()
    }
    const logInUser = ( email , password) =>{
        signInWithEmailAndPassword(auth,email,password)
        .then(result => console.log(result.user))
    }


    const authInfo ={
         registerUser,logInUser
       }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                      {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;