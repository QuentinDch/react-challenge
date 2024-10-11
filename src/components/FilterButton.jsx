import "../index.css";
import data from "../data/data.json";

function FilterButton() {
  const categories = [...new Set(data.map((object) => object.category))];

  return (
    <div className="btn-wrapper">
      <button className="btn filter-btn" type="button" onClick={handleClick}>
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className="btn filter-btn"
          type="button"
          onClick={handleClick}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FilterButton;

function handleClick() {
  console.log("click");
}
