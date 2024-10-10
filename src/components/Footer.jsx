import "../index.css";
import logo from "../assets/react.svg";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <li>
          <img src={logo} alt="Logo React-Challenge" />
        </li>
        <li>
          <p>Copyright &copy; 2024</p>
        </li>
        <li>
          <p>All Rights Reserved.</p>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
