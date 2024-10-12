
import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import React, {useState, useEffect} from "react";
function ListPage() {
 
  const [properties, setProperties] = useState([])
  useEffect(() => {
    const fetchProperties = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/properties/get-properties');
            setProperties(response.data);
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };

    fetchProperties();
}, []);

  console.log(properties);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  
  const queries = {};
  for (let [key, value] of queryParams.entries()) {
    queries[key] = value;
  }

  // console.log(queries); 

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter queries={queries}/> 
          {properties.map(item => (
            <Card key={item.id} item={item}/>
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={properties}/>
      </div>
    </div>
  );
}

export default ListPage;
