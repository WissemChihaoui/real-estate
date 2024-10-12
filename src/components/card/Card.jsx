import { Link } from "react-router-dom";
import "./card.scss";

function Card({ item }) {
  const user = true;
  return (
    <div className="card">
      <Link to={`/${item._id}`} className="imageContainer">
        <img src={item.image} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <span>
            <Link to={`/${item._id}`}>{item.title}</Link>
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
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.criteria.chambres} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.criteria.salle_de_bain} bathroom</span>
            </div>
          </div>
          <div className="icons">
            
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
