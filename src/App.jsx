import "./App.css";
import "./index.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CardList from "./components/CardList";
import FilterButton from "./components/FilterButton";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="Main">
        <FilterButton />
        <CardList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
