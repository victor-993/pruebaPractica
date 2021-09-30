import { useState } from "react";
import "./zona.css";
import CollapsibleTable from "../../Componentes/Table/Table";
import Loading from "../../Componentes/Loading/Loading";
import Error404 from "../../Componentes/Error/Error";
import useAxios from "../../Hooks/useAxios";
import Search from "../../Componentes/Search";

const Zonas = () => {

  const [valueInp, setValueInp] = useState("");
  const [url, setUrl] = useState(`/zonas/`);
  const [recarga, setRecarga] = useState(false);
  const { data, error, loading } = useAxios(url, recarga);
  

  const title = [
    "Codigo Zona",
    "Longitud",
    "Latitud",
  ];
  const titleDetails = [
    "Codigo Animal",
    "Longitud",
    "Latitud",
    "Propietario",
  ];

  return (
    <>
      <div className="conteiner">
        <div className="cont__lista">
          <h2 className="cont__lista-titulo">Listado de Zonas</h2>
          
          <hr className="linea-h2" />
          <div className='contSearch'>
            <Search
              valueInp={valueInp}
              setValueInp={setValueInp}
              titulo="Filtrar Zona"
              tooltip={`Tipos de Filtro: - coordenadas`}
            />
          </div>
          <div className="cont__lista-tabla">
            {loading ? (
              <Loading />
            ) : error ? (
              <Error404
                ancho={200}
                error="Se ha producido un problema, Recargue la pagina."
              />
            ) : (
              <CollapsibleTable
                data={data}
                filtro={valueInp}
                titulos={title}
                titulosDetalles={titleDetails}
                recarga={recarga}
                setRecarga={setRecarga}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Zonas;
