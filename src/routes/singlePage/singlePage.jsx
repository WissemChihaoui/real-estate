import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";

const SinglePage=()=> {
  const [property, setProperty] = useState()
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchProperties = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/properties/${id}`);
            setProperty(response.data);
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };
    console.log('In Use Effect');
    fetchProperties();
}, [id]);

console.log(property);
  const immobilierCategories = {
    exterieur: [
      { 
        label: 'Piscine', 
        value: 'piscine', 
        icon: '🏊',        // Exemple d'icône
        exist: true,      // Par défaut non existant
        number: property?.criteria?.piscine || 3      // Pas applicable (peut rester à 0 si non nécessaire)
      },
      { 
        label: 'Garage', 
        value: 'garage', 
        icon: '🚗', 
        exist: true, 
        number: property?.criteria?.garage          // Peut représenter le nombre de garages
      },
      { 
        label: 'Jardin', 
        value: 'jardin', 
        icon: '🌳', 
        exist: true, 
        number: property?.criteria.jardin          // Ici le champ "number" pourrait ne pas être pertinent
      },
      { 
        label: 'Abri Voiture', 
        value: 'abri_voiture', 
        icon: '🏠🚗', 
        exist: true, 
        number: property?.criteria.abri_voiture
      },
      { 
        label: 'Terrasse', 
        value: 'terrasse', 
        icon: '☀️', 
        exist: true, 
        number: property?.criteria.terrasse
      },
    ],
    interieur: [
      { 
        label: 'Salon', 
        value: 'salon', 
        icon: '🛋️', 
        exist: true, 
        number: property?.criteria.salon        // Nombre de salons
      },
      { 
        label: 'Cuisine', 
        value: 'cuisine', 
        icon: '🍴', 
        exist: true, 
        number: property?.criteria.cuisine
      },
      { 
        label: 'Salle à Manger', 
        value: 'salle_a_manger', 
        icon: '🍽️', 
        exist: true, 
        number: property?.criteria.salle_a_manger
      },
      { 
        label: 'Chambres', 
        value: 'chambres', 
        icon: '🛏️', 
        exist: true, 
        number: property?.criteria.chambres        // Nombre de chambres
      },
      { 
        label: 'Salle de Bain', 
        value: 'salle_de_bain', 
        icon: '🛁', 
        exist: true, 
        number: property?.criteria.salle_de_bain
      },
      { 
        label: 'Salle d\'Eau', 
        value: 'salle_d_eau', 
        icon: '🚿', 
        exist: true, 
        number: property?.criteria.salle_d_eau
      },
      { 
        label: 'Climatiseur', 
        value: 'climatiseur', 
        icon: '❄️', 
        exist: true, 
        number: property?.criteria.climatiseur        // Nombre de climatiseurs
      },
    ]
  };

  const categories = [
    { title: 'Espaces Extérieurs', items: immobilierCategories.exterieur },
    { title: 'Espaces Intérieurs', items: immobilierCategories.interieur },
  ];


  
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          {/* <Slider images={property?.images} /> */}
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{property?.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{property?.location?.country} {property?.location?.address}</span>
                </div>
                <div className="price">$ {property?.price}</div>
              </div>
              
            </div>
            <div className="bottom">{property?.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title2">Critère</p>
          {categories.map((category, catIndex) => (
        <div key={catIndex}>
          <p className="title">{category.title}:</p>
          <div className="sizes">
            {category.items.map((item, index) => (
              item.exist && ( 
                <div className="size" key={index}>
                  <span className="icon">{item.icon}</span> 
                  <span>{item.number > 1 ? `${item.number} ${item.label.toLowerCase()}` : item.label}</span> 
                </div>
              )
            ))}
          </div>
        </div>
      ))}
         
          <p className="title">Location</p>
          <div className="mapContainer">
            
          </div>
          <div className="buttons">
              <p>Pour Réserver :</p>
            <Link className="button" to={'/contact'}>
              <img src="/chat.png" alt="" />
              Contacter Nous
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
