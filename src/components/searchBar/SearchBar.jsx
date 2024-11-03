import { useState } from "react";
import "./searchBar.scss";
import { useNavigate } from "react-router-dom";

const types = [
  { value: 't', label: 'Terrain' },
  { value: 'm', label: 'Maison' },
  { value: 'v', label: 'Villa' }
];
const ventes = [
  { value: 'vente', label: 'Vente' },
  { value: 'location_sais', label: 'Location Saisionniere' },
  { value: 'location_annu', label: 'Location Annuelle' }
];

function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState({
    for: 'vente',
    type: "m",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, for: val }));
  };

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const params = new URLSearchParams();
  
    if (query.for) params.append('for', query.for);
    if (query.type) params.append('type', query.type);
    if (query.location) params.append('location', query.location);
    if (query.minPrice > 0) params.append('minPrice', query.minPrice);
    if (query.maxPrice > 0) params.append('maxPrice', query.maxPrice);
  
    // Navigate to the desired URL with the constructed query string
    navigate(`/list/properity?${params.toString()}`);
  };

  return (
    <div className="searchBar">
      <div className="type">
        {ventes.map((type, index) => (
          <button
            key={index}
            onClick={() => switchType(type.value)}
            className={query.for === type.value ? "active" : ""}
          >
            {type.label}
          </button>
        ))}
      </div>
      
      <form>
      <select
        value={query.type}
        name="type"
        id="type"
        onChange={handleChange}  // Add onChange handler
      >
        {types.map((type, index) => (
          <option key={index} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
        <input
          type="text"
          name="location"
          placeholder="Ville"
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Prix"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Prix"
          onChange={handleChange}
        />
        <button onClick={(e) => handleSubmit(e)}>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;