import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";
import iconMarker from '/marker-icon.png'
function Pin({ item }) {
  console.log('ITEM:', item);
  const icon = L.icon({ iconUrl: "/marker-icon.png" });
  return (
    <Marker  position={[item?.location?.latitude, item?.location?.longitude]} icon={icon}>
      <Popup>
        <div className="popupContainer">
          <img src={item?.thumbnails[0]} alt="" />
          <div className="textContainer">
            <Link to={`/${item?.id}`}>{item?.title}</Link>
            <span>{item?.criteria?.chambres} Chambres</span>
            <b>{item?.price} TND</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
