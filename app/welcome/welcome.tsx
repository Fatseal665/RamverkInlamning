import { Link } from "react-router";
import "../welcome/welcome.css";
export function Welcome() {
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
          <h2>Välkommen</h2>
        </section>
        <section id="breadtext">
          <p>Welcome to home page!</p>
        </section>
        <footer id="footer">
        <p>&#169;2025 BlueLobster Group</p>
        </footer>
      </main>
    </body>
  );
}
