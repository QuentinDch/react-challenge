import "../index.css";
import data from "../data/data.json";

const Card = () => {
  return (
    <div className="list-grid">
      {data.map((object) => (
        <div key={object.id} className="card">
          <img src={object.image} alt={object.title} />
          <h4>{object.title}</h4>
          <p>{object.description}</p>
          <p>{object.price}$</p>
          <button className="btn" type="button">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
