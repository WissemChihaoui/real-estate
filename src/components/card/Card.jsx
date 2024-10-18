import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./card.scss";

function Card({ item }) {
const user = false;
return (
<div className="card">
  <Link to={`/properity/${item._id}`} className="imageContainer">
  <img src={item.thumbnails[0]} alt="" />
  </Link>
  <div className="textContainer">
    <h2 className="title">
      <span>
        <Link to={`/properity/${item._id}`}>{item.title}</Link>
      </span>
      {user && (
      <div className="settings">
        <Link className={`/edit-post/${item._id}`}><button>Modifier</button></Link>
        <button className="dangerBtn">Supprimer</button>
      </div>
      )}
    </h2>
    <p className="address">
      <img src="/pin.png" alt="" />
      <span>{item.location.country} {item.location.address}</span>
    </p>
    <p className="price">TND {item.price}</p>
    <div className="bottom">
      <div className="features">
        <div className="feature">
          <img src="/bed.png" alt="" />
          <span>{item.criteria.chambres} Chambre</span>
        </div>
        <div className="feature">
          <img src="/bath.png" alt="" />
          <span>{item.criteria.salle_de_bain} Salle de bain</span>
        </div>
      </div>
      <div className="icons">

        <a target={'_blank'} href="https://wa.me/+21628072308" className="icon">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  </div>
</div>
);
}

export default Card;