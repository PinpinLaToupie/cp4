import React from "react";
import { Link } from "react-router-dom";
import "./Page404.scss";

function Page404() {
  return (
    <div className="bg-purple">
      <div className="stars">
        <div className="central-body">
          <img
            className="image-404"
            src="http://salehriaz.com/404Page/img/404.svg"
            width="300px"
            alt="404"
          />
          <Link to="/" className="btn-go-home">
            <button type="button" className="btn-go">
              Home 🚀
            </button>
          </Link>
        </div>
        <div className="objects">
          <img
            className="object_rocket"
            src="http://salehriaz.com/404Page/img/rocket.svg"
            width="40px"
            alt="Rocket"
          />
          <div className="earth-moon">
            <img
              className="object_earth"
              src="http://salehriaz.com/404Page/img/earth.svg"
              width="100px"
              alt="Earth"
            />
            <img
              className="object_moon"
              src="http://salehriaz.com/404Page/img/moon.svg"
              width="80px"
              alt="Moon"
            />
          </div>
          <div className="box_astronaut">
            <img
              className="object_astronaut"
              src="http://salehriaz.com/404Page/img/astronaut.svg"
              width="140px"
              alt="Astronaut"
            />
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
        </div>
      </div>
    </div>
  );
}

export default Page404;
