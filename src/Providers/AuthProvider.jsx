import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";



const auth = getAuth(app);
export const AuthContext = createContext();
const provider = new GoogleAuthProvider;
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    //google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth,provider );
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


  
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }
    
      // onAuthStateChange
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
          console.log('CurrentUser-->', currentUser)
          setLoading(false)
        })
        return () => {
          return unsubscribe()
        }
      }, [])


    const userInfo = {
        user,
        loading,
        createUser,
        signin,
        googleLogin,
        updateUserProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;