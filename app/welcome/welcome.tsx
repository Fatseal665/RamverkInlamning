import { Link } from "react-router";
import "../welcome/welcome.css"
export function Welcome() {

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
        <p>Welcome to home page!</p>
        <div>

        </div>
        </section>
        <footer>
          <h3>Copyright Eriksson CORP 2025</h3>
        </footer>
      </main>
    </body>
  );
}
