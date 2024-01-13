import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Login.scss";

function FormLogin({ handleFormSwitch, modal }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", { username, password });

      console.info(response.data);
      handleFormSwitch(true);
    } catch (error) {
      console.error("Erreur lors de la connexion", error);
    }
  };

  return (
    <div className="wrapper">
      <div className="login_box">
        <form onSubmit={handleLoginSubmit}>
          <button className="closeLogin" type="button" onClick={modal}>
            <p> X </p>
          </button>
          <div className="login-header">
            <span> Connexion </span>
          </div>
          <div className="input_box">
            <input
              type="text"
              id="user"
              className="input-field"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="user" className="label">
              Pseudo
            </label>
            <i className="bx bx-user icon" />
          </div>

          <div className="input_box">
            <input
              type="password"
              id="password"
              className="input-field"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password" className="label">
              Mot de passe
            </label>
            <i className="bx bx-lock-alt icon" />
          </div>

          <div className="input_box">
            <button type="submit" className="input-submit">
              Login
            </button>
          </div>

          <div className="register">
            <span>
              Vous n'avez pas de compte ?
              <button
                type="button"
                className="input-register"
                onClick={() => handleFormSwitch(false)}
              >
                Inscription
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

function FormRegister({ handleFormSwitch, modal }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const response = await axios.post("/api/register", {
        firstName,
        lastName,
        email,
        password,
      });

      console.info(response.data);
      handleFormSwitch(true);
    } catch (error) {
      console.error("Erreur lors de l'inscription", error);
    }
  };
  return (
    <div className="wrapper">
      <div className="login_box">
        <form onSubmit={handleRegisterSubmit}>
          <button className="closeLogin" type="button" onClick={modal}>
            <p> X </p>
          </button>
          <div className="login-header">
            <span> Inscription </span>
          </div>

          <div className="input_box">
            <input
              type="text"
              id="firstname"
              className="input-field"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstname" className="label">
              Prénom
            </label>
          </div>

          <div className="input_box">
            <input
              type="text"
              id="lastname"
              className="input-field"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastname" className="label">
              Nom
            </label>
          </div>

          <div className="input_box">
            <input
              type="email"
              id="email"
              className="input-field"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email" className="label">
              Email
            </label>
          </div>

          <div className="input_box">
            <input
              type="password"
              id="password"
              className="input-field"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password" className="label">
              Mot de passe
            </label>
          </div>

          <div className="input_box">
            <input
              type="password"
              id="confirm-password"
              className="input-field"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label htmlFor="confirm-password" className="label">
              Confirmer mot de passe
            </label>
          </div>

          <div className="register">
            <span>
              Vous n'avez pas de compte ?
              <button
                type="button"
                className="input-register"
                onClick={() => handleFormSwitch(false)}
              >
                Inscription
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

function Login({ closeLogin }) {
  const [isLogin, setIsLogin] = useState(true);

  const handleClickRegister = (switchLogin) => {
    setIsLogin(switchLogin);
  };

  const handleModalClose = () => {
    closeLogin(false);
  };

  return (
    <div>
      <div className="modal-overlay">
        {isLogin ? (
          <FormLogin
            handleFormSwitch={handleClickRegister}
            modal={handleModalClose}
          />
        ) : (
          <FormRegister
            handleFormSwitch={handleClickRegister}
            modal={handleModalClose}
          />
        )}
      </div>
    </div>
  );
}

FormRegister.propTypes = {
  handleFormSwitch: PropTypes.func.isRequired,
  modal: PropTypes.func.isRequired,
};

FormLogin.propTypes = {
  handleFormSwitch: PropTypes.func.isRequired,
  modal: PropTypes.func.isRequired,
};

Login.propTypes = {
  closeLogin: PropTypes.func.isRequired,
};

export default Login;
