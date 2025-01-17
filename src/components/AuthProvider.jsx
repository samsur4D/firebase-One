import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword ,
          GoogleAuthProvider, FacebookAuthProvider, signInWithPopup,
          onAuthStateChanged,
          signOut} from "firebase/auth";
import { auth } from "../firebase/Firebase.init"


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    const registerUser = (email , password)=>{
        return createUserWithEmailAndPassword(auth ,email,password) 
    }
    const logInUser = ( email , password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

     const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
     }

    const facebookLogin = () =>{
       return signInWithPopup(auth  , facebookProvider)
    }
      
    const logout = () =>{
         return signOut(auth)
    }

    const authInfo ={
         registerUser,logInUser,user,setUser, googleLogin, facebookLogin , logout
       }

    
    useEffect(()=>{
      const unsubscribe =   onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
             setUser(currentUser)
              
            } else {
              setUser(null);
            }
          });
          return () =>{
            unsubscribe()
          }
          
    },[])


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                      {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;