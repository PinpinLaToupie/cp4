import React, { useEffect, useRef } from "react";

function Home() {
  const stars = useRef(null);
  const moon = useRef(null);
  const mountainsBehind = useRef(null);
  const text = useRef(null);
  const btn = useRef(null);
  const mountainsFront = useRef(null);
  const header = useRef(null);

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
          Logo
        </a>
        <ul>
          <li>
            <a href="/home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </header>

      <section>
        <img
          src="https://drive.google.com/uc?export=view&id=1nHl2PZEhjGl18XyZYWnWloFciszXvpXh"
          id="stars"
          alt="stars"
        />
        <img
          src="https://drive.google.com/uc?export=view&id=11ywlLc0-vbBwuKFVfTX7stDFih0TBiJG"
          id="moon"
          alt="moon"
        />
        <img
          src="https://drive.google.com/uc?export=view&id=1A8KUta55RJbL-47_J1_J8L2EVJnzWUJv"
          id="mountains_behind"
          alt="mountains behind"
        />
        <h2 id="text">Moon Light</h2>
        <a href="#sec" id="btn">
          Explore
        </a>
        <img
          src="https://drive.google.com/uc?export=view&id=1sc056mKgpKjv7rBiop8QbPPtF7b8pwtu"
          id="mountains_front"
          alt="mountains front"
        />
      </section>

      <div className="sec" id="sec">
        <h2>Cosmo Nomade </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </p>
      </div>
    </div>
  );
}

export default Home;
