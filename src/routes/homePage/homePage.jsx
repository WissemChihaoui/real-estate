import { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import Loader from "../../components/loader/Loader";
import axios from "axios";
import "./homePage.scss";
import ContentSection from "../../components/contentSection/ContentSection";

function HomePage() {
  const [properitys, setProperitys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayNewsletter, setDisplayNewsletter] = useState(false);
  const apiUrl = import.meta.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    setDisplayNewsletter(true);
  }, []);

  const hideNewsletter = () => {
    setDisplayNewsletter(false);
  };

  useEffect(() => {
    const fetchNewProperties = async () => {
      try {
        const response = await axios.get(`https://krayem-server.vercel.app/api/properties/get-properties`);
        setProperitys(response.data);
        if (response.status === 200) {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchNewProperties();
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <div className="home-background"></div>
      {/* {displayNewsletter && <Newsletter hideNewsletter={hideNewsletter} />} */}
      <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">AGENCE DEMONSTRATION</h1>
            <p>
              Que vous recherchiez la maison de vos rêves ou un terrain pour construire, nous vous accompagnons à chaque étape.
              Découvrez notre vaste sélection de propriétés adaptées à tous les besoins et budgets, avec un service sur mesure
              pour vous aider à faire le bon choix. Profitez de notre expertise pour trouver l'endroit parfait où commencer
              votre nouvelle vie.
            </p>
            <SearchBar />
            
          </div>
        </div>
        
      </div>

      {/* Use ContentSection for recent offers */}
      <ContentSection
        title="Nouvelles Offres"
        data={properitys
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 4)}
      />

      {/* Use ContentSection for terrains */}
      <ContentSection
        title="Des terrains"
        data={properitys.filter((item) => item.type.includes("t"))}
      />
      <ContentSection
        title="Des maison"
        data={properitys.filter((item) => item.type.includes("m"))}
      />
      <ContentSection
        title="Des villa"
        data={properitys.filter((item) => item.type.includes("v"))}
      />
    </>
  );
}

export default HomePage;
