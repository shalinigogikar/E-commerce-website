import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase"; // Import Firebase Authentication
import { onAuthStateChanged, signOut,signInWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    // Check if a user is already logged in from localStorage
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const token = await currentUser.getIdToken();
        setUser(currentUser);
        setToken(token);
        localStorage.setItem("user", JSON.stringify(currentUser));
        localStorage.setItem("token", token);
      } else {
        setUser(null);
        setToken("");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    });
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = await user.getIdToken();

      setUser(user);
      setToken(token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout =async () => {
    await signOut(auth);
    setUser(null);
    setToken("");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token,login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

