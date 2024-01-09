import React from "react";
import PropTypes from "prop-types";
import "./Login.scss";

function Login({ modal }) {
  return (
    <div className="wrapper">
      <div className="login_box">
        <button className="closeLogin" type="button" onClick={modal}>
          <p> X </p>
        </button>
        <div className="login-header">
          <span> </span>
        </div>

        <div className="input_box">
          <input type="text" id="user" className="input-field" required />
          <label htmlFor="user" className="label">
            Pseudo
          </label>
          <i className="bx bx-user icon" />
        </div>

        <div className="input_box">
          <input type="password" id="pass" className="input-field" required />
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
          <input type="submit" className="input-submit" value="Login" />
        </div>

        <div className="register">
          <span>
            Vous n'avez pas de compte ? <a href="/register"> Inscription</a>
          </span>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  modal: PropTypes.func.isRequired,
};

export default Login;
