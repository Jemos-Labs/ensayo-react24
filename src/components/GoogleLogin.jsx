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
import { storage } from "../firebase";
import {
  ref,
  uploadBytes,
} from "firebase/storage";

export default function GoogleLogin() {
  
  const [user, setUser] = useState(null);
  const [file, setFile] = useState(null);

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

  async function uploadFile() {
    if (!file) return;

    try {
      const storageRef = ref(
        storage,
        `uploads/${user.uid}/${file.name}`
      );

      await uploadBytes(storageRef, file);

      console.log("Archivo subido");
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

          <input
            type="file"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
          />

          <button onClick={uploadFile}>
            Subir archivo
          </button>

          <button onClick={logout}>
            Cerrar sesión
          </button>
        </>
      )}
    </div>
  );
}
