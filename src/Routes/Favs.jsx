import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { favorites, setFavorites } = useContextGlobal();  // Asegúrate de tener acceso a setFavorites

  const resetFavs = () => {
    // Borrar favoritos del localStorage
    localStorage.removeItem("favorites");

    // Actualizar el estado de favoritos a un array vacío
    setFavorites([]);

    alert("Favoritos reiniciados");
  };

  return (
    <div>
      <h1>Mis Favoritos</h1>
      <button onClick={resetFavs} className="resetButton">
        Resetear Favoritos
      </button>
      <div className="card-grid">
        {favorites.length > 0 ? (
          favorites.map((odontologo) => (
            <Card
              key={odontologo.id}
              name={odontologo.name}
              username={odontologo.username}
              odontologo={odontologo}
              id={odontologo.id}
              disabled={true}  // En Favs, todo está deshabilitado
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
