import { useEffect, useState, useCallback } from "react";
import firebase from "firebase/app";
import AuthContext from "../context/AuthContext";
import { User } from "../context/AuthContext";
import { auth } from "../api/firebase";
import SignInButton from "../components/SignInButton";

export const AuthProvider: React.FC = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((im) => {
      if (im) {
        setIsInitialized(true);
        setUser({
          displayName: im.displayName,
          email: im.email,
          photo: im.photoURL,
          uid: im.uid,
        });
      } else {
        setIsInitialized(true);
        setUser(null);
      }
    });
  }, []);

  const getContent = useCallback(() => {
    if (!isInitialized) {
      return <div>Loading...</div>;
    }
    if (user === null) {
      return <SignInButton />;
    }
    return children;
  }, [isInitialized, user, children]);

  return <AuthContext.Provider value={{ user }}>{getContent()}</AuthContext.Provider>;
};