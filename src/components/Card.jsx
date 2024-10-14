import "../index.css";

const Card = ({ object, setCount }) => {
  return (
    <div className="card">
      <img src={object.image} alt={object.title} />
      <h4>{object.title}</h4>
      <p>{object.description}</p>
      <p>{object.price.toFixed(2)}$</p>
      <button
        className="btn buy-btn"
        type="button"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Card;
