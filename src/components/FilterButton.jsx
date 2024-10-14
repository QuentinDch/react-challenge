import "../index.css";
import data from "../data/data.json";

function FilterButton({ setSelectedFilter }) {
  const categories = [...new Set(data.map((object) => object.category))];

  return (
    <div className="btn-wrapper">
      <button
        className="btn filter-btn"
        type="button"
        onClick={() => setSelectedFilter("")}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className="btn filter-btn"
          type="button"
          onClick={() => setSelectedFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FilterButton;
