import { Link } from "react-router";
import "../welcome/welcome.css";
import { type Animal } from "../components/animal";
import { useEffect } from "react";
export function Welcome() {
  function greet(name: string): string {
    return "Hello " + name;
  }

  const lobster: Animal = {
    species: "Lobster",
    diet: "Shrimps",
    age: 5,
  };

  function printAnimal(animal: Animal) {
    useEffect(()=> {console.log(animal);},[])
  }

  printAnimal(lobster)

  return (

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
          <div>
            <h2> {greet("Bob")}</h2>
          </div> 
            <div>
              <h1>Check the console for the animal object!</h1>
            </div>
        </section>

        <footer id="footer">
          <p>&#169;2025 BlueLobster Group</p>
        </footer>
      </main>
  );
}
