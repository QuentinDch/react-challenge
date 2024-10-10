import "../index.css";
import logo from "../assets/react.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo React-Challenge" />
      <h1>React-Challenge</h1>
    </nav>
  );
}

export default Navbar;
