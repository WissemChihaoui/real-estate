import React, { useState, useEffect} from 'react'
import './list.scss'
import Card from"../card/Card"
import {listData} from"../../lib/dummydata"
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function List(){
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

  return (
    <div className='list'>
      {properties.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default List