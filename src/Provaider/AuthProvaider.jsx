import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const gooleProvaider = new GoogleAuthProvider()


const AuthProvaider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // google 
    const google =()=>{
        setLoading(true)
        signInWithPopup(auth, gooleProvaider)
        .then(res => console.log(res))
        .catch(error => console.log(error.message))
    }

    // create user
    const createUser = (email, password)=>{
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(res =>{
            console.log(res.user)
        })
        .catch(error => console.log(error.message))
    }

    // login with email
    const signIn = (email, password)=>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then(res => console.log(res.user))
        .catch(error => console.log(error.message))
    }

    // signOut
    const logOut =()=>{
        setLoading(true)
       return signOut(auth)
        
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoading(false)
        })
        return ()=>{
            return unSubscribe()
        }
    },[])



    const authInfo ={
        google,
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvaider;