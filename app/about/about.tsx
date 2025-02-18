import { Link } from "react-router";
import { useState } from "react";
import "../about/about.css";
export function About() {
  const [score, setScore] = useState<number>(0);

  function addition(score : number) {
    setScore(score + 1);
  }

  function subtraction(score : number) {
    setScore(score - 1);
  }

  return (
    <body>
      <main>
        <header>
          <h1>Lobster INC</h1>
          <nav>
            <button>
              <Link to={"/"}>Home</Link>
            </button>
            <button>
              <Link to={"/about"}>About</Link>
            </button>
          </nav>
        </header>
        <section id="hero-section">
          <img
            id="hero-image"
            src="https://i.ytimg.com/vi/EX6qG_pcxG0/maxresdefault.jpg"
            alt="Huvudbild"
          />
          <h2>About</h2>
        </section>
        <section id="breadtext">
          <p>Welcome to about page!</p>
          <div>
            <p>Score: {score}</p>
            <button onClick={() => subtraction(score)}>-1</button>
            <button onClick={() => addition(score)}>+1</button>
          </div>
        </section>
        <footer id="footer">
          <p>&#169;2025 BlueLobster Group</p>
        </footer>
      </main>
    </body>
  );
}
