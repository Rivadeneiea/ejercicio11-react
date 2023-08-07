import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NoticiaTarjeta from "./components/NoticiaTarjeta";
import Form from "react-bootstrap/Form";
import Footer from "./components/Footer";

function App() {
  // paso 4 DEBO CREAR UN ESTADO PARA GUARDAR LOS DATOS DE LA
  // RESPUESTA DE LA API
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState("top");
  // este useEffect se lo usa por dos razones
  // la primera es para consultar la funcion
  // consultarApi y la segunda al estar en
  // desarrollocontrolas el montaje de la aplicacion
  useEffect(() => {
    consultarApi();
  }, [categoria]);
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
        `https://newsdata.io/api/1/news?apikey=pub_26815e3379be8009c57f199f4a5743ab2d2bb&category=${categoria}`
      );
      const dato = await respuesta.json();
      setNoticias(dato.results);
      console.log(dato);
    } catch (error) {}
  };

  const selector = (e) => {
    setCategoria(e.target.value);
  };

  return (
    <>
      <h1 className="container text-center text-danger">News of the world</h1>
      <section>
        <Form.Select
          className="container "
          aria-label="Default select example"
          onChange={selector}
        >
          <option>Open this select menu</option>
          <option value="top">top</option>
          <option value="entertainment">entertainment</option>
          <option value="world">world</option>
        </Form.Select>
      </section>
      <section className="container d-flex flex-wrap">
        {noticias.map((noticia) => (
          <NoticiaTarjeta noticia={noticia} />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default App;
