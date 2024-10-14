import "./App.css";
import "./index.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CardList from "./components/CardList";
import FilterButton from "./components/FilterButton";
import { useState } from "react";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="Main">
        <div>Cart : {count}</div>
        <FilterButton setSelectedFilter={setSelectedFilter} />
        <CardList
          selectedFilter={selectedFilter}
          count={count}
          setCount={setCount}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
