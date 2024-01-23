import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import FavouriteSong from "./pages/FavouriteSong";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouriteSong />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
