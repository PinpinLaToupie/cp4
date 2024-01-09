import { Outlet } from "react-router-dom";
import Granim from "granim";
import "./App.css";

function App() {
  return (
    <div>
      <Outlet />
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
