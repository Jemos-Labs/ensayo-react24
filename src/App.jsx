import GoogleLogin from "./components/GoogleLogin";
import CloudFunction from "./components/CloudFunction";
/**
  * Componente principal de la aplicación.
  *
  * Este componente muestra un encabezado de nivel 1 con el texto "Hello world!"
  * y estilos predefinidos.
  * @returns {import('react').JSX.Element} Un elemento JSX que representa el encabezado.
  * @example
  * // Uso típico en una aplicación React
  * import App from './App';
  * 
  * function Main() {
  *   return (
  *     <div>
  *       <App />
  *     </div>
  *   );
  * }
  */
const App = () => {
  return (
    <div className="text-3xl font-bold underline space-y-4">
      <h2>Hello world!! This is a website in firebase</h2>

      <p>My ReactJS + Actions + Firebase + Terra 2026 El workflow quedo actualizado con permisos WIF y SA!</p>
      <GoogleLogin />

      <CloudFunction />
    </div>
  )
};

export { App };
