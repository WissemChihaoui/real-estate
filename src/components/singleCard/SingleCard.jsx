import './SingleCard.scss'
import { Link } from "react-router-dom";
const SingleCard = () => {
  return (
    <Link to={`/1`} className='singleCard'>
        <img src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="info">
            <h2>Card Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel nunc nec arcu finibus faucibus.</p>
            <div className="features">
                <div className="feature">
                    <img src="/bed.png" alt="" />
                    <span>1 bedroom</span>
                </div>
                <div className="feature">
                    <img src="/bath.png" alt="" />
                    <span>1 bathroom</span>
                </div>
          </div>
        </div>
    </Link>
  )
}

export default SingleCard