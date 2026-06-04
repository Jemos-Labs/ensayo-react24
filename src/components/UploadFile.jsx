import { useState } from "react";
import { storage } from "../firebase";

import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export default function UploadFile() {
  const [file, setFile] = useState(null);

  async function handleUpload() {
    if (!file) return;

    const storageRef = ref(
      storage,
      `uploads/${file.name}`
    );

    await uploadBytes(storageRef, file);

    const url = await getDownloadURL(
      storageRef
    );

    console.log("Archivo:", url);
  }

  return (
    <div>
      <input
        type="file"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

      <button onClick={handleUpload}>
        Subir archivo
      </button>
    </div>
  );
}