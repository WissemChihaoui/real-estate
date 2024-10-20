import { useState } from "react";
import "./navbar.scss";
import { Link, useParams } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
const {type} = useParams()
  const user = true;
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Krayem</span>
        </Link>
        <Link to="/">Accueil</Link>
        <Link to="/list/properity?type=m">Maison</Link>
        <Link to="/list/properity?type=v">Villa</Link>
        <Link to="/list/properity?type=t">Terrain</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Connexion Admin</a>
          </>
        )}
        <div className={open ? "menuIcon active" : "menuIcon"}>
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
