import React, { useEffect, useRef } from "react";
import "./Travel.scss";

function Travel() {
  const stars = useRef(null);
  const moon = useRef(null);
  const header = useRef(null);
  const mountainsFront = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (stars.current) stars.current.style.left = `${value * 0.25}px`;
      if (moon.current) moon.current.style.top = `${value * 1.05}px`;
      if (header.current) header.current.style.top = `${value * 0.5}px`;
      if (mountainsFront.current)
        mountainsFront.current.style.top = `${value * 0}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <section>
        <img src="./stars.png" id="stars" alt="stars" ref={stars} />
        <img src="./moon.png" id="moon" alt="moon" ref={moon} />
        <h1 className="h1-home-travel">Prêt au décollage 🚀</h1>
        <img
          src="./mountains_front.png"
          id="mountains_front"
          alt="mountains front"
          ref={mountainsFront}
        />
      </section>
      <div className="sec" id="sec">
        <h2>Bienvenue à Cosmo Nomade : Votre Portail vers l'Odyssée Lunaire</h2>
        <h3>Découvrez les Destinations Lunaires Inoubliables</h3>
        <p>
          Embarquez pour un voyage extraordinaire où chaque cratère et mer
          lunaire a son histoire. De la sérénité enveloppante de la Mer de la
          Tranquillité au spectacle majestueux du cratère Tycho, nos guides vous
          feront découvrir la Lune comme jamais auparavant. Plongez dans les
          légendes anciennes et les découvertes scientifiques qui rendent chaque
          visite unique.
        </p>
        <br />
        <h3>Séjournez dans Nos Bases Lunaires Exclusives</h3>
        <p>
          Nos bases lunaires sont conçues pour fusionner confort et aventure.
          Que vous rêviez d'une détente dans un habitat de luxe avec vue sur la
          Terre ou d'une immersion totale dans l'environnement lunaire, nos
          bases offrent tout le nécessaire pour rendre votre séjour inoubliable,
          des installations de pointe aux activités enrichissantes.
        </p>
        <br />
        <h3>Itinéraires de Voyage Sur Mesure, Aventures Personnalisées</h3>
        <p>
          Que votre passion soit l'exploration, la relaxation ou la science,
          nous avons l'itinéraire parfait pour vous. Découvrez nos parcours
          adaptés à vos envies, du trekking en apesanteur aux séjours éducatifs
          enrichissants qui révèlent les secrets de la géologie lunaire et de
          l'histoire spatiale.
        </p>
        <br />
        <h3>Expériences et Activités Enrichissantes</h3>
        <p>
          Rejoignez-nous pour des activités qui défient l'imaginaire. Marchez
          sur les traces des astronautes, capturez la beauté de l'espace en
          photographie, ou laissez-vous tenter par des sports en apesanteur. Nos
          ateliers d'arts et d'écriture vous permettent d'exprimer votre
          créativité sous un tout nouvel angle.
        </p>
        <br />
        <h3>Guides et Conseils de Voyage</h3>
        <p>
          Préparez-vous à l'aventure avec nos conseils experts. De
          l'entraînement physique à la préparation mentale, nous vous guidons à
          chaque étape pour garantir une expérience lunaire en toute sécurité.
          Apprenez tout sur la vie dans l'espace, de la nutrition aux cycles de
          sommeil, pour une immersion totale.
        </p>
        <br />
        <h3>FAQ et Informations Pratiques</h3>
        <p>
          Vous avez des questions ? Nous avons des réponses. De la sécurité des
          voyages spatiaux aux détails de votre séjour lunaire, nous vous
          fournirons toutes les informations nécessaires pour vous préparer à
          cette incroyable odyssée.
        </p>
        <br />
        <h3>Avec Cosmo Nomade, l'inaccessible devient possible</h3>
        <p>
          Rejoignez-nous pour une aventure qui redéfinit le voyage, où chaque
          moment promet d'être aussi infini que l'espace lui-même. Votre billet
          pour l'aventure la plus épique de votre vie vous attend !
        </p>
      </div>
    </div>
  );
}

export default Travel;
