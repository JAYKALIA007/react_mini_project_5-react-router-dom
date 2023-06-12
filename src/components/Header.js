import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div style={{ border: "1px solid black", margin: "2px" }}>
      <p>header component</p>
      <nav>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </nav>
    </div>
  );
};
export default Header;
