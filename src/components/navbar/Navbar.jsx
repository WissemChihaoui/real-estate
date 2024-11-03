import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import NavbarDropDown from "../navbarDropDown/NavbarDropDown";
const dropdownsData = [
  {
    header: 'Vente',
    menu: [
      { title: 'Vente de maison', link: '/list/properity?for=vente&type=m' },
      { title: 'Vente de villa', link: '/list/properity?for=vente&type=v' },
      { title: 'Vente de terrain', link: '/list/properity?for=vente&type=t' }
    ]
  },
  {
    header: 'Location Saisionniere',
    menu: [
      { title: 'Location villa', link: '/list/properity?type=v&for=location_sais' },
      { title: 'Location résidence', link: '/list/properity?type=v&for=location_sais' },
      { title: 'Location maison', link: '/list/properity?type=m&for=location_sais' }
    ]
  },
  {
    header: 'Location Annuelle',
    menu: [
      { title: 'Location villa', link: '/list/properity?type=v&for=location_annu' },
      { title: 'Location maison', link: '/list/properity?type=m&for=location_annu' }
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
