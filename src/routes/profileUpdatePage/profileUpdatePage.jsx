import "./profileUpdatePage.scss";
import { useState} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function ProfileUpdatePage() {
  const [formData, setFormData] = useState ({
    email: '',
    lastName: '',
    firstName: '',
    picture:''
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [base64, setBase64] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64(reader.result);
        console.log('eee',reader.result)
        setFormData({...formData, picture:reader.result })
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('form', formData)
      setLoading(true)
      const response = await axios.patch(
        'http://localhost:5000/auth/user/edit-informations/670a93cb58755b9c1200cb9e',
        formData);
      if (response.status === 200){
        navigate("/profile")
        console.log("succed")
      }
      else{
        setError(true)
        console.log("erroor")
      }
      setLoading(false);
  } catch (error) {
      setError(true)
      console.error('Error updating profile:', error);
      setLoading(false)
  }
  }
  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Edite Profile</h1>
          <div className="item">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Image</label>
            <input 
              type='file'
              accept='.jpg, .png|image/*'
              id='image'
              name='Upload image'
              onChange={handleFileChange} />
          </div>
        </form>
      </div>
      <div className="sideContainer">
        <img src="" alt="" className="avatar" />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
