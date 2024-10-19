import { useState } from "react";
import "./Add.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useNavigate } from "react-router-dom";

function Add() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(images);
    console.log('submitted');
  }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const inputs = Object.fromEntries(formData);

//     try {
//       const res = await apiRequest.post("/posts", {
//         postData: {
//           title: inputs.title,
//           price: parseInt(inputs.price),
//           address: inputs.address,
//           city: inputs.city,
//           bedroom: parseInt(inputs.bedroom),
//           bathroom: parseInt(inputs.bathroom),
//           type: inputs.type,
//           property: inputs.property,
//           latitude: inputs.latitude,
//           longitude: inputs.longitude,
//           images: images,
//         },
//         postDetail: {
//           desc: value,
//           utilities: inputs.utilities,
//           pet: inputs.pet,
//           income: inputs.income,
//           size: parseInt(inputs.size),
//           school: parseInt(inputs.school),
//           bus: parseInt(inputs.bus),
//           restaurant: parseInt(inputs.restaurant),
//         },
//       });
//       navigate("/"+res.data.id)
//     } catch (err) {
//       console.log(err);
//       setError(error);
//     }
//   };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Ajouter Poste</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Titre</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="item">
              <label htmlFor="price">Prix</label>
              <input id="price" name="price" type="number" />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type" id="type">
                <option value={'t'}>Terrain</option>
                <option value={'m'}>Maison</option>
                <option value={'v'}>Villa</option>
              </select>
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <textarea rows={10}></textarea>
            </div>
            <div className="item">
              <label htmlFor="country">Ville</label>
              <input id="country" name="country" type="text" />
            </div>
            <div className="item">
              <label htmlFor="adresse">Adresse</label>
              <input id="adresse" name="adresse" type="text" />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" />
            </div>
            
            <div className="item">
              <label htmlFor="bedroom">Nombre de chambre</label>
              <input min={1} id="bedroom" name="bedroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Nombre de salle de bain</label>
              <input min={1} id="bathroom" name="bathroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="cuisine">Cuisine</label>
              <input id="cuisine" name="cuisine" type="text" />
            </div>
            <div className="item">
              <label htmlFor="salle_a_manger">Salle à manger</label>
              <input id="salle_a_manger" name="salle_a_manger" type="text" />
            </div>
            <div className="item">
              <label htmlFor="piscine">Piscine</label>
              <input id="piscine" name="piscine" type="text" />
            </div>
            <div className="item">
              <label htmlFor="garage">Garage</label>
              <input id="garage" name="garage" type="text" />
            </div>
            <div className="item">
              <label htmlFor="jardin">Jardin</label>
              <input id="jardin" name="jardin" type="text" />
            </div>
            <div className="item">
              <label htmlFor="abri_voiture">Abri voiture</label>
              <input id="abri_voiture" name="abri_voiture" type="text" />
            </div>
            <div className="item">
              <label htmlFor="abri_voiture">Abri voiture</label>
              <input id="abri_voiture" name="abri_voiture" type="text" />
            </div>
            <div className="item">
              <label htmlFor="terrasse">Terrasse</label>
              <input id="terrasse" name="terrasse" type="text" />
            </div>
            <div className="item">
              <label htmlFor="salon">Salon</label>
              <input id="salon" name="salon" type="text" />
            </div>
            <div className="item">
              <label htmlFor="salle_d_eau">Salle d'eau</label>
              <input id="salle_d_eau" name="salle_d_eau" type="text" />
            </div>
            <div className="item">
              <label htmlFor="climatiseur">Climatiseur</label>
              <input id="climatiseur" name="climatiseur" type="text" />
            </div>
            
            
            <button className="sendButton">Add</button>
            {error && <span>error</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "dwxaf2fd3",
            uploadPreset: "krayem",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default Add;