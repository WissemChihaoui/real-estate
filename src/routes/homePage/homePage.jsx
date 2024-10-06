import SearchBar from "../../components/searchBar/SearchBar";
import SingleCard from "../../components/singleCard/SingleCard";
import "./homePage.scss";

function HomePage() {
  return (
    <div>
      <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">Trouvez l'Immobilier & Obtenez Votre Lieu de Rêve</h1>
            <p>
              Que vous recherchiez la maison de vos rêves ou un terrain pour construire, nous vous accompagnons à chaque étape. 
              Découvrez notre vaste sélection de propriétés adaptées à tous les besoins et budgets, avec un service sur mesure 
              pour vous aider à faire le bon choix. Profitez de notre expertise pour trouver l'endroit parfait où commencer 
              votre nouvelle vie.
            </p>
            <SearchBar />
            <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
              </div>
              <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
              </div>
              <div className="box">
                <h1>2000+</h1>
                <h2>Property Ready</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src="/bg.png" alt="" />
        </div>
      </div>
      <div className="home-content">
        <div className="recent-posts wrapper">
          <h1 className="title">Nouvelles Offres</h1>
          <div className="cards">
            <SingleCard />
            <SingleCard />
            <SingleCard />
            <SingleCard />
          </div>
        </div>
      </div>
      <div className="home-content">
        <div className="recent-posts wrapper">
          <h1 className="title">Des terrains</h1>
          <div className="cards">
            <SingleCard />
            <SingleCard />
            <SingleCard />
            <SingleCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
