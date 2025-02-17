import { Link } from "react-router";
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
        <p>Welcome to home page!</p>
        <footer>
          <h3>Copyright Eriksson CORP 2025</h3>
        </footer>
      </main>
    </body>
  );
}
