import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/Firebase'
import { useState } from 'react';
import { useEffect } from 'react';

export const Authcontext = createContext();
const auth = getAuth(app);

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
        return signInWithPopup(auth)
    }

    const logutUser = ()=>{
        setloding(true)
        return signOut(auth)
    };

    useEffect(()=>{
        const unscribe = onAuthStateChanged(auth,(currentUser)=>{
            setuser(currentUser);
            setloding(false)
        })
        return ()=> unscribe()
    })

    const authInfo ={user, loding,
         createUser, loginUser, logutUser, signinGoogle
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