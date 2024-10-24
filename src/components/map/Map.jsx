import { MapContainer, TileLayer } from 'react-leaflet'
import './map.scss'
import "leaflet/dist/leaflet.css";
import Pin from '../pin/Pin';

function Map({items}){
  console.log('ITEMM', items)
  return (
    <MapContainer center={[33.7742958, 10.8724815]} zoom={11} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items && items.map(item=>(
      <Pin item={item} key={item?._id}/>
    ))}
  </MapContainer>
  )
}

export default Map