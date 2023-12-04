import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvaider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

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