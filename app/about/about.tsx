import { Link } from "react-router";
import { useState } from "react";
export function About() {
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
        <p>Welcome to about page!</p>
        <div>
          
        </div>
        <footer>
          <h3>Copyright Eriksson CORP 2025</h3>
        </footer>
      </main>
    </body>
  );
}
