
import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { useLocation, useParams } from 'react-router-dom';
import axios from "axios";
import React, {useState, useEffect} from "react";
function ListPage() {
 
  const [properties, setProperties] = useState([])
  const [Price, setPrice] = useState()
  const { type } = useParams();

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
  const [searchQueries, setSearchQueries] = useState({
    location: '',
    minPrice: '1000',
    maxPrice: '990000',
    type: '',
    surface: '',
  })

  const handleChange = (e) => {
    setSearchQueries({
      ...searchQueries,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          {/**====================================== */}
          <div className="filter">
      <h1>
        {searchQueries.location && <>Résultat pour <b>Houmet Essouk</b></>}
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="location">Ville</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Location"
            value={searchQueries.location}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="bottom">
        
        
        <div className="item">
          <label htmlFor="minPrice">Min Prix</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="touts"
            value={searchQueries.minPrice}
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Prix</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="touts"
            value={searchQueries.maxPrice}
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label htmlFor="surface">Surface</label>
          <input
            type="text"
            id="surface"
            name="surface"
            placeholder="touts"
            value={searchQueries.surface}
            onChange={handleChange}
          />
        </div>
      
      </div>
    </div>
          {/**====================================== */}
          {properties
            .filter((item) => 
              searchQueries.location ? item.location.country.includes(searchQueries.location) : true
            )
            .filter((item) => 
              item.price >= searchQueries.minPrice && item.price <= searchQueries.maxPrice
            )
            .filter((item) => 
              item.type.includes(type)
            )
            .map((item) => (
              <Card key={item._id.$oid} item={item} />
            ))
          }
        </div>
      </div>
      <div className="mapContainer">
        <Map items={properties}/>
      </div>
    </div>
  );
}

export default ListPage;
