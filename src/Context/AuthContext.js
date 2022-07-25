import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import '../firebase';
  
  const AuthContext = React.createContext();
  
  export function useAuth() {
    return useContext(AuthContext);
  }
  
  export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();
    const [life, setLife] = useState(false)
    const [swape, setSwape] = useState()
    const  [swapel , setSwapel]= useState()

    const lifesaver=(val)=>{
        if (val === 1) {setLife(true)}
        else {setLife(false)}
    }
  
    useEffect(() => {
      const auth = getAuth();
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        setLoading(false);
      });
      return unsubscribe;
    }, []);
  
    // signup function
    async function signup(email, password, username) {
        console.log(email,password, username );
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
  
      // update profile
      await updateProfile(auth.currentUser, {
        displayName: username,
      });
  
      const user = auth.currentUser;
      setCurrentUser({
        ...user,
      });
    }
  
    // login function
    function login(email, password) {
      const auth = getAuth();
      return signInWithEmailAndPassword(auth, email, password);
    }
  
    // logout function
    function logout() {
      const auth = getAuth();
      return signOut(auth);
    }

    const exchange =val=>{
   
         if (val == 0) {setSwape(true)}
         else {
           setSwape(false);
         }
    }

    const exchangel =val=>{
    
         if (val == 0) {setSwapel(true)}
         else {
           setSwapel(false);
         }
    }


 
  
    const value = {
      currentUser,
      signup,
      login,
      logout,
      lifesaver,
      life,
      exchange,
      swape,
      exchangel,
      swapel
    };
  
    return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    );
  }
  