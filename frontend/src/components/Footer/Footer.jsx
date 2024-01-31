import "./Footer.scss";

function Footer() {
  const redirectToUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="footer">
      <div className="top-content">
        <button
          type="button"
          className="gif-button"
          onClick={() => redirectToUrl("https://github.com/PinpinLaToupie")}
        >
          <img
            className="gif-image"
            src="github.gif"
            alt="GIF Réseau Social 1"
          />
        </button>
        <button
          type="button"
          className="gif-button"
          onClick={() => redirectToUrl("https://www.instagram.com/femenias.c/")}
        >
          <img
            className="gif-image"
            src="instagram.gif"
            alt="GIF Réseau Social 2"
          />
        </button>
        <button
          type="button"
          className="gif-button"
          onClick={() =>
            redirectToUrl(
              "https://www.linkedin.com/in/clement-femenias-5b7471279/"
            )
          }
        >
          <img
            className="gif-image"
            src="linkedin.gif"
            alt="GIF Réseau Social 3"
          />
        </button>
      </div>
      <div className="back-content">
        <p>©🦙 Clément Féménias--Noir</p>
      </div>
    </footer>
  );
}

export default Footer;
