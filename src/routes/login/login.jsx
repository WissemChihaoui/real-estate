import { useState } from "react";
import "./login.scss";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Login() {
const [formData, setFormData]= useState({
  email:'',
  pwd:''
});
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)
const [base64, setBase64] = useState('');
const navigate = useNavigate();

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.id]: e.target.value });
};
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   // console.log('form', formData)
    setLoading(true)
    const response = await axios.post(
      'http://localhost:5000/auth/user/login',
      formData);
      setLoading(true)  
    if (response.status === 200){
      navigate("/profile")
      console.log("succed")
    }
    else{
      setError(true)
      setLoading(false)
    }
    setLoading(false);
} catch (error) {
    setError(true)
    setError(error)
    console.error('Error updating profile:', error);
    setLoading(false)
}
}
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input 
            name="email" 
            id="email" 
            type="text" 
            placeholder="email@example.com" 
            value={formData.email}
            onChange={handleChange} />
          <input 
            name="pwd" 
            id="pwd" 
            type="password" 
            placeholder="Password" 
            value={formData.pwd}
              onChange={handleChange} />
          <button disabled={loading}>{loading ? "Processing": "Login"}</button>
          <p>{error.response?.data?.message}</p>
           </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
