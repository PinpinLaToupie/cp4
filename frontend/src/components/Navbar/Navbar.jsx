import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.scss";
import Login from "../Login/Login";
import { useUser } from "../../Contexts/UserContext";
import Instance from "../../services/axios";

function Navbar() {
  const { user, setUser } = useUser();
  const nav = useNavigate();
  const [openLogin, setOpenLogin] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const hLogout = () => {
    Instance.delete("/logout");
    setUser(null);
    nav("/");
    closeMenu();
  };

  const hAccountClick = () => {
    if (user) {
      nav("/moncompte");
    } else {
      setOpenLogin(true);
    }
    closeMenu();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (event, action) => {
    if (event.key === "Enter" || event.key === " ") {
      action();
    }
  };

  return (
    <div>
      <header>
        <NavLink to="/" className="logo" onClick={closeMenu}>
          Cosmo Nomade
        </NavLink>
        <div
          className={`burger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          onKeyDown={(e) => handleKeyDown(e, toggleMenu)}
          role="button"
          aria-label="Menu"
          tabIndex="0"
        >
          <div> </div>
          <div> </div>
          <div> </div>
        </div>
        <ul className={`iconListe ${isMenuOpen ? "show" : ""}`}>
          <li>
            <NavLink to="/" className="active" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/voyage" className="active" onClick={closeMenu}>
              Voyage
            </NavLink>
          </li>
          <li>
            <NavLink to="/carousel" className="active" onClick={closeMenu}>
              Galerie
            </NavLink>
          </li>
          <li>
            <button type="button" className="active" onClick={hAccountClick}>
              Compte
            </button>
          </li>
          {user !== null && (
            <li>
              <button type="button" className="active" onClick={hLogout}>
                Déconnexion
              </button>
            </li>
          )}
          {openLogin && <Login closeLogin={setOpenLogin} />}
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
