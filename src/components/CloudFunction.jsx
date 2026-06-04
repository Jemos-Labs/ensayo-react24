import { useState } from "react";

export default function CloudFunction() {
  const [message, setMessage] = useState("");

  async function callFunction() {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL
      );

      const data = await response.text();

      setMessage(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={callFunction}>
        Llamar Function
      </button>

      <p>{message}</p>
    </div>
  );
}