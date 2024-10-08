import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummydata";
import { Link } from "react-router-dom";

function SinglePage() {
  const immobilierCategories = {
    exterieur: [
      { 
        label: 'Piscine', 
        value: 'piscine', 
        icon: '🏊',        // Exemple d'icône
        exist: true,      // Par défaut non existant
        number: 0          // Pas applicable (peut rester à 0 si non nécessaire)
      },
      { 
        label: 'Garage', 
        value: 'garage', 
        icon: '🚗', 
        exist: true, 
        number: 1          // Peut représenter le nombre de garages
      },
      { 
        label: 'Jardin', 
        value: 'jardin', 
        icon: '🌳', 
        exist: true, 
        number: 0          // Ici le champ "number" pourrait ne pas être pertinent
      },
      { 
        label: 'Abri Voiture', 
        value: 'abri_voiture', 
        icon: '🏠🚗', 
        exist: true, 
        number: 1
      },
      { 
        label: 'Terrasse', 
        value: 'terrasse', 
        icon: '☀️', 
        exist: true, 
        number: 0
      },
    ],
    interieur: [
      { 
        label: 'Salon', 
        value: 'salon', 
        icon: '🛋️', 
        exist: true, 
        number: 1        // Nombre de salons
      },
      { 
        label: 'Cuisine', 
        value: 'cuisine', 
        icon: '🍴', 
        exist: true, 
        number: 1
      },
      { 
        label: 'Salle à Manger', 
        value: 'salle_a_manger', 
        icon: '🍽️', 
        exist: true, 
        number: 1
      },
      { 
        label: 'Chambres', 
        value: 'chambres', 
        icon: '🛏️', 
        exist: true, 
        number: 3        // Nombre de chambres
      },
      { 
        label: 'Salle de Bain', 
        value: 'salle_de_bain', 
        icon: '🛁', 
        exist: true, 
        number: 1
      },
      { 
        label: 'Salle d\'Eau', 
        value: 'salle_d_eau', 
        icon: '🚿', 
        exist: true, 
        number: 1
      },
      { 
        label: 'Climatiseur', 
        value: 'climatiseur', 
        icon: '❄️', 
        exist: true, 
        number: 2        // Nombre de climatiseurs
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
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
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
              item.exist && ( // Vérifier si l'élément existe
                <div className="size" key={index}>
                  <span className="icon">{item.icon}</span> {/* Afficher l'icône */}
                  <span>{item.number > 0 ? `${item.number} ${item.label.toLowerCase()}` : item.label}</span> {/* Afficher le label */}
                </div>
              )
            ))}
          </div>
        </div>
      ))}
         
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
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
