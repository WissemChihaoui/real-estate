import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import NavbarDropDown from "../navbarDropDown/NavbarDropDown";
const dropdownsData = [
  {
    header: 'Vente',
    menu: [
      { title: 'Vente de maison', link: '/vente-maison' },
      { title: 'Vente de villa', link: '/vente-villa' },
      { title: 'Vente de terrain', link: '/vente-terrain' }
    ]
  },
  {
    header: 'Location Saisionniere',
    menu: [
      { title: 'Location villa', link: '/location-appartement' },
      { title: 'Location résidence', link: '/location-villa' },
      { title: 'Location maison', link: '/location-terrain' }
    ]
  },
  {
    header: 'Location Annuelle',
    menu: [
      { title: 'Location villa', link: '/' },
      { title: 'Location maison', link: '/' }
    ]
  }
];
function Navbar({ user }) {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Krayem</span>
        </Link>
        <Link to="/">Accueil</Link>
        <NavbarDropDown dropdowns={dropdownsData}/>
      
       
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src={user.picture} alt={user.firstName} />
            <span>{`${user.firstName} ${user.lastName}`}</span>
            <Link to="/profile" className="profile">
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Connexion Admin</Link>
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
          <a href="/">Accueil</a>
          <a href="/">Vente</a>
          <a href="/">Location Annuelle</a>
          <a href="/">Location Saisionniere</a>
          
          {user? (
            <a href={'/profile'} className="profile">
              <span>Profile</span>
            </a>
          ): (
            <a style={{fontSize: '16px'}} href={'/login'}>Connexion Admin</a>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
