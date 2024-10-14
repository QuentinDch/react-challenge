import "../index.css";
import Card from "./Card";
import data from "../data/data.json";

function CardList({ selectedFilter, count, setCount }) {
  let filteredData;
  if (selectedFilter) {
    filteredData = data.filter((object) =>
      object.category.includes(selectedFilter)
    );
  }
  filteredData = filteredData || data;

  return (
    <div className="list-grid">
      {filteredData.map((object) => (
        <Card key={object.id} object={object} setCount={setCount} />
      ))}
    </div>
  );
}

export default CardList;
