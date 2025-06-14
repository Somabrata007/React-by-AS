import { useState } from "react";
import Logo from "../assets/img/image.png";
import { Link } from "react-router-dom";

//JSX - This is a React element written as a JSX expression.
const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2"
      src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBfy-1v_MLOMDjTVOEPHJL6S7NTp1Fkz0yIA&s"}
      alt="logo"
    />
  </a>
);

//Composing Components
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex justify-between bg-green-300 shadow">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2"><Link to="/">Home</Link></li>
          <li className="px-2"><Link to="/about">About</Link></li>
          <li className="px-2"><Link to="/contact">Contact</Link></li>
          <li className="px-2"><Link to="/cart">Cart</Link></li>
          <li className="px-2"><Link to="/instamart">Instamart</Link></li>
        </ul>
      </div>
      {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
    </div>
  );
};

export default Header;