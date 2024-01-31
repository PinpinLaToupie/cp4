import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import Granim from "granim";
import instance from "./services/axios";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  useEffect(() => {
    instance
      .get("/users")
      .then((res) => console.info(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

function initGranim() {
  return new Granim({
    element: "#granim_bg",
    direction: "radial",
    isPausedWhenNotInView: true,
    states: {
      "default-state": {
        gradients: [
          ["#0C0F0A", "#ADF6FC"],
          ["#0C0F0A", "#0C0F0A"],
          ["#ADF6FC", "#0C0F0A"],
          ["#0C0F0A", "#ADF6FC"],
          ["#0C0F0A", "#0C0F0A"],
          ["#0C0F0A", "#ADF6FC"],
          ["#0C0F0A", "#0C0F0A"],
        ],
        transitionSpeed: 6000,
      },
    },
  });
}

initGranim();

export default App;
