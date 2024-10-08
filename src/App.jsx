import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Components/utils/routes";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import { useContextGlobal } from "./Components/utils/global.context";

function App() {
  const { state } = useContextGlobal();
  return (
    <div
      className={`App ${state.theme === "dark-mode" ? "dark-mode" : "light"}`}
    >
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path={routes.detail} element={<Detail />} />{" "}  
        <Route path={routes.contact} element={<Contact />} />
        <Route
          path={routes.notFound}
          element={<h1>Error 404 - Page not Found</h1>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
