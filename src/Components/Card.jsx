import { Link } from "react-router-dom";
import React from "react";
import { useContextGlobal } from "../Components/utils/global.context";

const Card = ({ odontologo, disabled }) => {
  const { favorites, setFavorites } = useContextGlobal();

  const addFav = () => {
    // Verificar si el odontólogo ya está en favoritos
    const isAlreadyFavorite = favorites.some(fav => fav.id === odontologo.id);

    if (isAlreadyFavorite) {
      // Si ya está en favoritos, mostrar una alerta
      alert("Este odontólogo ya está en favoritos");
    } else {
      // Si no está, agregarlo a la lista de favoritos
      setFavorites((favorites) => [...favorites, odontologo]);
      alert("Odontólogo agregado a favoritos");
    }
  };

  return (
    <div className="card">
      <Link to={"/detail/" + odontologo.id}>
        <img
          src="./images/doctor.jpg"
          alt="odontologo"
          width={150}
          height={200}
        />
        <p>Nombre: {odontologo.name}</p>
        <p>UserName: {odontologo.username}</p>
        <p>ID: {odontologo.id}</p>
      </Link>
      {/* Deshabilitar el botón si la prop 'disabled' es true */}
      <button 
        onClick={addFav} 
        className="favButton" 
        disabled={disabled}
        style={{ opacity: disabled ? 0.5 : 1}}
      >
        ⭐
      </button>
    </div>
  );
};

export default Card;
