import { Link } from "react-router-dom";
import React from "react";
import { useContextGlobal } from "../Components/utils/global.context";

const Card = ({ odontologo, disabled }) => {
  const { state, dispatch } = useContextGlobal();

  const addFav = () => {
    const isAlreadyFavorite = state.favorites.some(
      (fav) => fav.id === odontologo.id
    );

    if (isAlreadyFavorite) {
      alert("Este odontólogo ya está en favoritos");
    } else {
      dispatch({ type: "ADD_FAV", payload: odontologo });
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
      </Link>
      <button
        onClick={addFav}
        className={`favButton ${state.theme === "dark" ? "dark" : ""}`}
        disabled={disabled}
        style={{ opacity: disabled ? 0.5 : 1 }}
      >
        ⭐
      </button>
    </div>
  );
};

export default Card;
