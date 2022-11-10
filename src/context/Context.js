import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/Firebase'
import { useState } from 'react';
import { useEffect } from 'react';

export const Authcontext = createContext();
const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider()

const Context = ({children}) => {

    const [user,setuser] = useState(null);
    const [loding,setloding]  = useState(true);

    const createUser = (email,pass)=>{
        setloding(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    };

    const loginUser = (email,pass)=>{
        setloding(true)
        return signInWithEmailAndPassword(auth,email,pass)
    };

    const signinGoogle =()=>{
        setloding(true)
        return signInWithPopup(auth, googleAuth)
    }

    const logutUser = ()=>{
        localStorage.removeItem('token')
        setloding(true)
        return signOut(auth)
    };

    const updateUser=(profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(()=>{
        const unscribe = onAuthStateChanged(auth,(currentUser)=>{
            setuser(currentUser);
            setloding(false)
        })
        return ()=> unscribe()
    })

    const authInfo ={user, loding,
         createUser, loginUser, logutUser, signinGoogle, updateUser
        };

    return (
        <div>
            <Authcontext.Provider value={authInfo}>
                {children}
            </Authcontext.Provider>
        </div>
    );
};

export default Context;