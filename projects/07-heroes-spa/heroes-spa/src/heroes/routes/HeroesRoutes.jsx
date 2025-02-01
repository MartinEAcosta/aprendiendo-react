import { Routes, Route, Navigate } from "react-router-dom";
import { PublisherPage, SearchPage , HeroPage } from "../pages";
import { Navbar } from "../../ui";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<PublisherPage publisher={'Marvel Comics'}  />} />
          <Route path="dc" element={<PublisherPage publisher={'DC Comics'} />} />
          
          <Route path="search" element={<SearchPage />} />
          <Route path="hero" element={<HeroPage />} />

          {/* Search, hero by id */}

          {/* En caso de entrar a una ruta no especificada va marvel */}
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
