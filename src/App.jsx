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
      <h2>This is a website firebase Hosting resource</h2>

      <p>ReactJS in Actions & Firebase Hosting 2026</p>
      <GoogleLogin />

      <CloudFunction />
    </div>
  )
};

export { App };
