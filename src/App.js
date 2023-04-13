import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Film } from "./components/Film";
import { Serie } from "./components/Serie";
import { Connexion } from "./components/Connexion";
import { Notfaund } from "./components/Notfaund";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Film" element={<Film />} />
            <Route path="/Serie" element={<Serie />} />
            <Route path="/Connexion" element={<Connexion />} />
            <Route path="/Notfaund" element={<Notfaund />} />
          </Routes>
        <Footer />
      </Router>
  </>
  );
}

export default App;
