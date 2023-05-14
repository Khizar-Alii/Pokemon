import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./My Components/Navbar";
import Pokemonz from "./My Components/Pokemonz";
import About from "./My Components/About";
import Contact from "./My Components/Contact";
import PrivacyPolicy from "./My Components/PrivacyPolicy";
import PokemonDetails from "./My Components/PokemonDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Pokemonz />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/pokemondetails/:pokemonName" element={<PokemonDetails/>} />
      </Routes>
      
    </div>
  );
}

export default App;
