import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();

  const changeButton = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  return (
    <>
      <div
        className={`contenedor ${
          state.theme === "dark-mode" ? "dark-mode" : "light"
        }`}
      >
        <Link to="/">
          <img
            src={
              state.theme === "dark-mode"
                ? "/images/logo-dental-blanco.png"
                : "/images/logo-dental.png "
            }
            alt=""
            width={250}
            height={100}
          />
        </Link>
        <nav className="navbar">
          <Link to="/">
            <h4>Home</h4>
          </Link>
          <Link to="/favs">
            <h4>Fav</h4>
          </Link>
          <Link to="/contact">
            <h4>Contact</h4>
          </Link>
          <button
            onClick={changeButton}
            className={`theme-toggle-button ${
              state.theme === "dark-mode" ? "dark-mode" : "light"
            }`}
          >
            <img
              src={
                state.theme === "dark-mode"
                  ? "/images/light.png"
                  : "/images/dark.png"
              }
              alt="theme-toggle"
              width={35}
              height={35}
            />
          </button>
        </nav>
      </div>
    </>
  );
};
export default Navbar;