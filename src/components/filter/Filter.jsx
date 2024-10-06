import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        Résultat pour <b>Houmet Essouk</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Ville</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            value={'Houmet Essouk'}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">touts</option>
            <option value="home">Bien Immobilier</option>
            <option value="land">Terrain</option>
          </select>
        </div>
        
        <div className="item">
          <label htmlFor="minPrice">Min Prix</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="touts"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Prix</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="touts"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Surface</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="touts"
          />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
