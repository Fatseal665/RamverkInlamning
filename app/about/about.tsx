import { Link } from "react-router";
import { useState } from "react";
import "../about/about.css";
export function About() {
  const [score, setScore] = useState<number>(0)


  function addition() {
    setScore(score + 1)
  }

  function subtraction() {
    setScore(score - 1)
  }

  return (
    <body>
      <main>
        <header>
          <h1>Webbsida</h1>
          <nav>
            <button>
              <Link to={"/"}>Home</Link>
            </button>
            <button>
              <Link to={"/about"}>About</Link>
            </button>
          </nav>
        </header>
        <section id= "breadtext">
        <p>Welcome to about page!</p>
        <div>
          <p>Score: {score}</p>
          <button onClick={addition}>+1</button>
        </div>
        <div>
        <button onClick={subtraction}>-1</button>
        </div>
        </section>
        <footer>
          <h3>Copyright Eriksson CORP 2025</h3>
        </footer>
      </main>
    </body>
  );
}
