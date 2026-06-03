export default function LoginButton({ onLogin }) {
  return (
    <button onClick={onLogin}>
      Iniciar sesion con Google
    </button>
  );
}