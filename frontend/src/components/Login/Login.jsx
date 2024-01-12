import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.scss";

function FormLogin({ isLogin, modal }) {
  return (
    <div className="wrapper">
      <div className="login_box">
        <form>
          <button className="closeLogin" type="button" onClick={modal}>
            <p> X </p>
          </button>
          <div className="login-header">
            <span> Connexion </span>
          </div>
          <div className="input_box">
            <input type="text" id="user" className="input-field" required />
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
            />
            <label htmlFor="pass" className="label">
              Mot de passe
            </label>
            <i className="bx bx-lock-alt icon" />
          </div>

          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember"> Se souvenir</label>
            </div>

            <div className="forgot">
              <a href="/forgot-password">Mot de passe oublié ?</a>
            </div>
          </div>

          <div className="input_box">
            <button
              type="submit"
              className="input-submit"
              onClick={() => isLogin(true)}
            >
              Login
            </button>
          </div>

          <div className="register">
            <span>
              Vous n'avez pas de compte ?
              <button
                type="button"
                className="input-register"
                onClick={() => isLogin(false)}
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

function FormRegister({ isLogin, modal }) {
  return (
    <div className="wrapper">
      <div className="login_box">
        <form>
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
            />
            <label htmlFor="firstname" className="label">
              Prénom
            </label>
            <i className="bx bx-user icon" />
          </div>

          <div className="input_box">
            <input type="text" id="lastname" className="input-field" required />
            <label htmlFor="lastname" className="label">
              Nom
            </label>
            <i className="bx bx-user icon" />
          </div>

          <div className="input_box">
            <input type="email" id="email" className="input-field" required />
            <label htmlFor="email" className="label">
              Email
            </label>
            <i className="bx bx-envelope icon" />
          </div>

          <div className="input_box">
            <input
              type="password"
              id="password"
              className="input-field"
              required
            />
            <label htmlFor="password" className="label">
              Mot de passe
            </label>
            <i className="bx bx-lock icon" />
          </div>

          <div className="input_box">
            <input
              type="password"
              id="confirm-password"
              className="input-field"
              required
            />
            <label htmlFor="confirm-password" className="label">
              Confirmer mot de passe
            </label>
            <i className="bx bx-lock icon" />
          </div>

          <div className="register">
            <span>
              Vous n'avez pas de compte ?
              <button
                type="button"
                className="input-register"
                onClick={() => isLogin(false)}
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

  const closeSignUpModal = () => {
    closeLogin(false);
  };

  return (
    <div>
      <div className="modal-overlay">
        {isLogin ? (
          <FormLogin isLogin={handleClickRegister} modal={closeSignUpModal} />
        ) : (
          <FormRegister
            isLogin={handleClickRegister}
            modal={closeSignUpModal}
          />
        )}
      </div>
    </div>
  );
}

FormRegister.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  modal: PropTypes.func.isRequired,
};

FormLogin.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  modal: PropTypes.func.isRequired,
};

Login.propTypes = {
  closeLogin: PropTypes.func.isRequired,
};

export default Login;
