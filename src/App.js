//import logo from "./logo.svg";
import "./App.css";
import Simplelista from "./Components/simpleLista";
import Ispisimena from "./Components/Ispisimena";
import Ispisnovi from "./Components/Ispisnovi";
import BootstrapComponent from "./Components/bootstrap";
function App() {
  // Definirajte listu imena

  {
    const listaImena = ["Ana", "Lidija", "Marija", "Ivan", "Klara"];
    const klijent = [
      { id: "f23", name: "Ana", years: 65 },
      { id: "f25", name: "Lidija", years: 42 },
    ];
  }
  return (
    <div className="App">
      {/*<Simplelista />
      <Ispisimena listaImena={listaImena} />
  <Ispisnovi listaImena={klijent} /> */}
      <BootstrapComponent />
    </div>
  );
}

export default App;
