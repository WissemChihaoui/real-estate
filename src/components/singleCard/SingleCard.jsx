import './SingleCard.scss'
import { Link } from "react-router-dom";
const SingleCard = (item) => {
  console.log('rrr',item.properity?._id)
  return (
    <Link to={`/properity/${item.properity?._id}`} className='singleCard'>
        <img src={item.image} alt="" />
        <div className="info">
            <h2>{item.properity?.title}</h2>
            <p>{item.properity?.description}.</p>
            <div className="features">
                <div className="feature">
                    <img src="/bed.png" alt="" />
                    <span>{item.properity?.criteria?.chambres}</span>
                </div>
                <div className="feature">
                    <img src="/bath.png" alt="" />
                    <span>{item.properity?.criteria?.salle_de_bain}</span>
                </div>
          </div>
        </div>
    </Link>
  )
}

export default SingleCard