import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Noticia from "./components/Noticia";

function App() {
  // paso 4 DEBO CREAR UN ESTADO PARA GUARDAR LOS DATOS DE LA
  // RESPUESTA DE LA API
  const [noticias, setNoticias] = useState([]);
  // este useEffect se lo usa por dos razones
  // la primera es para consultar la funcion
  // consultarApi y la segunda al estar en
  // desarrollocontrolas el montaje de la aplicacion
  useEffect(() => {
    consultarApi();
  }, []);
  // hook: significa gancho y lo que hace es enganchar de
  // herramienta de react a un componente

  // paso 2 crear funcion que va a consumir api

  const consultarApi = async () => {
    // paso 3 me debo asegurar dos cosas
    // agrego bloque try y catch
    // try : intentar el bloque entre llaves del try
    // va a intentar ejecutar un codigo si no lo puede
    // entra al catch
    // catch: significa capturar , captura el error de lo
    // que es intentado por el try
    // CUANDO CONSUMO UNA API SIEMPRE DEBE TENER EL ASYNC Y EL AWAIT
    // el async se vincula con las promesas de que la api me va a retornar una
    // respuesta y el await es la espera de esa respuesta
    try {
      const respuesta = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_26815e3379be8009c57f199f4a5743ab2d2bb&q=pizza"
      );
      const dato = await respuesta.json();
      setNoticias(dato.results);
      console.log(dato);
    } catch (error) {}
  };

  return (
    <>
      <section>
        <Noticia />
      </section>
    </>
  );
}

export default App;
