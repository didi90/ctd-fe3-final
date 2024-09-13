import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../reducer/reducer";

const ContextGlobal = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favorites")) || [];
const lsTheme = localStorage.getItem("theme") || "light"; // Cargar el tema desde localStorage

const initialState = {
  odontologo: [],
  favorites: lsFavs,
  theme: lsTheme,
};

const Context = ({ children }) => {
  //const [odontologo, setOdontologo] = useState([]);
  //[favorites, setFavorites] = useState(lsFavs);

  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      //setOdontologo(res.data);
      dispatch({ type: "GET_CHARS", payload: res.data });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};
