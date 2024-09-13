import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state, dispatch } = useContextGlobal(); // Asegúrate de tener acceso a setFavorites

  const resetFavs = () => {
    // Borrar favoritos del localStorage
    localStorage.removeItem("favorites");
    dispatch({ type: "RESET" });
    localStorage.setItem("favorites", JSON.stringify([])); // Actualiza localStorage a vacío
    alert("Favoritos reiniciados");
  };

  return (
    <div className="contenedor-favoritos">
      <h1>Mis Favoritos</h1>
      <button onClick={resetFavs} className="resetButton">
        Resetear Favoritos
      </button>
      
      <div className="card-grid">
        {state.favorites.length > 0 ? (
          state.favorites.map((odontologo) => (
            <Card
              key={odontologo.id}
              name={odontologo.name}
              username={odontologo.username}
              odontologo={odontologo}
              id={odontologo.id}
              disabled={true} // En Favs, todo está deshabilitado
            />
          ))
        ) : (
          <p>No tienes favoritos aún</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
