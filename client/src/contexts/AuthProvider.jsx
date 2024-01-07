import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ childern }) => {
    const [ user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true);

    // create an account
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    };

    // sign up with gmail
    const signUpWithGmail = () => {
      return signInWithPopup(auth, googleProvider)
    };

    // login using email and password
    const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const logout = () => {
      signOut(auth) 
    };

    // update profile
    const updateUserProfile = ({ name, photoUrl }) => {
      return updateProfile(auth.currentUser, {
        displayName: name, photoUrl: photoUrl
      })
    }

    // check signed-in user
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if(currentUser) {
          setUser(currentUser);
          setLoading(false);
        } else {
          // User is signed out
          // ...
        }
      })
      return () => {
        return unsubscribe();
      }
    }, []);
    
    const authInfo =  {
        user,
        createUser,
        signUpWithGmail,
        login,
        logout,
        updateUserProfile
    }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        { childern } 
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider;
