import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { db } from "../firebase";

import { auth } from "../firebase";
import LoginButton from "./LoginButton";
import { doc, setDoc } from "firebase/firestore";

export default function GoogleLogin() {
  
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
      }
    );

    return () => unsubscribe();
  }, []);
  
  async function login() {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(
        auth,
        provider
      );

      const user = result.user;

      await setDoc(
        doc(db, "users", user.uid),
        {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        }
      );
      setUser(user);

    } catch (error) {
      console.error(error);
    }
  }

  async function logout() {
    try {
      await signOut(auth);

      setUser(null);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {!user ? (
        <LoginButton onLogin={login} />
      ) : (
        <>
          <h2>Bienvenido</h2>

          <p>{user.displayName}</p>

          <p>{user.email}</p>

          <button onClick={logout}>
            Cerrar sesión
          </button>
        </>
      )}
    </div>
  );
}