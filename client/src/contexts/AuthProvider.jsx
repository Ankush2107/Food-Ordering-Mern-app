// Import necessary modules from 'react' and 'firebase'
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

// Create a context to provide authentication information to components
export const AuthContext = createContext();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Define the AuthProvider component
const AuthProvider = ({ children }) => {
    // State to keep track of the authenticated user and loading state
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to create a new user account with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Function to sign up with Gmail
    const signUpWithGmail = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    }

    // Function to log in using email and password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Function to log out
    const logOut = () => {
      return signOut(auth);
    }

    // Function to update the user's profile information
    const updateUserProfile = (name, photoURL) => {
      return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          });
    }

    // Effect hook to check if a user is signed in
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser);
          setLoading(false);
      });

      // Cleanup function to unsubscribe when the component is unmounted
      return () => {
          return unsubscribe();
      }
    }, [])

    // Object containing authentication information to be provided through the context
    const authInfo = {
        user,            // Authenticated user
        createUser,      // Function to create a new user account
        signUpWithGmail, // Function to sign up with Gmail
        login,           // Function to log in using email and password
        logOut,          // Function to log out
        updateUserProfile, // Function to update the user's profile information
        loading          // Loading state
    }

  // Provide the authentication information to the components using the context
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

// Export the AuthProvider component as the default export
export default AuthProvider;
