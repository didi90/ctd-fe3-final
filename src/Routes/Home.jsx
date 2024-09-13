import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContextGlobal();
  return (
    <main className={state.theme === "dark-mode" ? "dark-mode" : "light"}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.odontologo.map((odontologo) => (
          <Card
            key={odontologo.id}
            name={odontologo.name}
            username={odontologo.username}
            odontologo={odontologo}
            disabled={false}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
