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
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
};

export { App };
