import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { state } = useContextGlobal();

  useEffect(() => {
    const fetchOdontologo = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setDetail(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOdontologo();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="detalle">
      <h1>Detail Dentist {detail.id} </h1>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table
        className={state.theme === "dark-mode" ? "dark-mode" : "light"}
      >
        <tr>
          <td>
            <strong>Nombre:</strong>
          </td>
          <td>{detail.name}</td>
        </tr>
        <tr>
          <td>
            <strong>Username:</strong>
          </td>
          <td>{detail.username}</td>
        </tr>
        <tr>
          <td>
            <strong>Email:</strong>
          </td>
          <td>{detail.email}</td>
        </tr>
        <tr>
          <td>
            <strong>Teléfono:</strong>
          </td>
          <td>{detail.phone}</td>
        </tr>
        <tr>
          <td>
            <strong>Sitio Web:</strong>
          </td>
          <td>{detail.website}</td>
        </tr>
      </table>
    </div>
  );
};

export default Detail;
