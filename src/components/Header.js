import { useState } from "react";
import Logo from "../assets/img/image.png";
import { Link } from "react-router-dom";

//JSX - This is a React element written as a JSX expression.
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBfy-1v_MLOMDjTVOEPHJL6S7NTp1Fkz0yIA&s"}
      alt="logo"
    />
  </a>
);

//Composing Components
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
      {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
    </div>
  );
};

export default Header;