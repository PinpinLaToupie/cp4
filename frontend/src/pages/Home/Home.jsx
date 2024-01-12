import React, { useEffect, useRef, useState } from "react";
import "./Home.scss";
import Login from "../../components/Login/Login";

function Home() {
  const stars = useRef(null);
  const moon = useRef(null);
  const mountainsBehind = useRef(null);
  const text = useRef(null);
  const btn = useRef(null);
  const mountainsFront = useRef(null);
  const header = useRef(null);

  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (stars.current) stars.current.style.left = `${value * 0.25}px`;
      if (moon.current) moon.current.style.top = `${value * 1.05}px`;
      if (mountainsBehind.current)
        mountainsBehind.current.style.top = `${value * 0.5}px`;
      if (mountainsFront.current)
        mountainsFront.current.style.top = `${value * 0}px`;
      if (text.current) {
        text.current.style.marginRight = `${value * 4}px`;
        text.current.style.marginTop = `${value * 1.5}px`;
      }
      if (btn.current) btn.current.style.marginTop = `${value * 1.5}px`;
      if (header.current) header.current.style.top = `${value * 0.5}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header>
        <a href="/" className="logo">
          Cosmo Nomade
        </a>
        <ul>
          <li>
            <a href="/" className="active">
              Home
            </a>
          </li>
          <li>
            <button type="button" className="active" onClick={toggleLogin}>
              Compte
            </button>
          </li>
          <li>
            <a href="/voyage" className="active">
              Voyage
            </a>
          </li>
          <li>
            <a href="/galerie" className="active">
              Galerie
            </a>
          </li>
        </ul>
      </header>

      {showLogin && <Login modal={toggleLogin} />}

      <section>
        <img src="./stars.png" id="stars" alt="stars" ref={stars} />
        <img src="./moon.png" id="moon" alt="moon" ref={moon} />
        <img
          src="./moutains_behind.png"
          id="mountains_behind"
          alt="mountains behind"
          ref={mountainsBehind}
        />
        <h2 id="text" ref={text}>
          Moon Light
        </h2>
        <a href="#sec" id="btn">
          Go 🚀
        </a>
        <img
          src="./mountains_front.png"
          id="mountains_front"
          alt="mountains front"
          ref={mountainsFront}
        />
      </section>

      <div className="sec" id="sec">
        <h2>Cosmo Nomade : Votre Odyssée Lunaire Commence Ici </h2>
        <p>
          Embarquez avec avec nous, où le ciel n'est pas une limite, mais un
          nouveau terrain de jeu sans frontières. En tant que jeune startup
          dynamique, nous révolutionnons les voyages spatiaux, transformant des
          rêves d'exploration lunaire en réalité palpitante. Imaginez troquer
          votre valise pour un scaphandre et partir pour une aventure
          éblouissante au clair de la Lune. Avec Cosmo Nomade, l'exploration
          spatiale devient aussi simple que de réserver un billet d'avion, mais
          infiniment plus exaltante. "CosmoNomade" fusionne l'univers infini
          ("cosmo") et l'esprit de liberté d'un nomade, vous invitant à une
          aventure unique où vous pourrez danser avec les étoiles et flotter
          au-dessus de vos soucis terrestres. Nous repoussons les limites,
          explorons l'inexploré et redéfinissons l'aventure, en vous offrant
          bien plus qu'un voyage : une expérience transformatrice.
          Rejoignez-nous dans cette quête d'aventures audacieuses et de
          découvertes sans limites. Avec Cosmo Nomade, embarquez pour une
          odyssée spatiale mêlant aventure, humour et audace, où la gravité est
          optionnelle mais l'émerveillement est garanti. Votre billet pour la
          plus grande aventure de votre vie vous attend : un voyage
          spectaculaire sur la Lune, où les horizons terrestres s'élargissent
          jusqu'à l'infini.
        </p>
      </div>
    </div>
  );
}

export default Home;
