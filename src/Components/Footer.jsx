import React from "react";
import { useContextGlobal } from "../Components/utils/global.context";

const Footer = () => {
  const { state, dispatch } = useContextGlobal();
  return (
    <footer>
      <p>Powered by</p>
      <img
        src={
          state.theme === "dark-mode"
            ? "./images/DHBlanco.png"
            : "./images/DH.png"
        }
        alt="DH-logo"
      />
    </footer>
  );
};

export default Footer;
