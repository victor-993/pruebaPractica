import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (API, recarga, validar, metodo, body) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const axConfig = async () => {
    try {
      const response = await axios({
        method: metodo,
        url: API,
        data: body,
      });
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(!loading);
    }
  };

  useEffect(() => {
    if (
      (metodo === "post" || metodo === "put" || metodo === "delete") &&
      validar
    ) {
      axConfig();
    } else if (metodo === "get" || metodo === undefined) {
      axConfig();
    } else {
      setLoading(!loading);
    }
  }, [API, recarga, metodo, body]);

  return { data, error, loading };
};

export default useAxios;
