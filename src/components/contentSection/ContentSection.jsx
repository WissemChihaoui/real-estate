// ContentSection.js
import SingleCard from "../singleCard/SingleCard";
// import "./ContentSection.scss";

const ContentSection = ({ title, data }) => {
  if (!data || data.length === 0) return null; // Return nothing if there's no data

  return (
    <div className="home-content">
      <div className="recent-posts wrapper">
        <h1 className="title">{title}</h1>
        <div className="cards">
          {data.map((item) => (
            <SingleCard key={item._id} properity={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
