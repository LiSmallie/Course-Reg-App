import React, { useState } from 'react';
import axios from 'axios'; // Import axios library

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ matricNo: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.password)
    console.log(formData.matricNo)

    try {
        // Make a POST request to your backend
      const response = await axios.post('http://localhost:3001/login', {
        Matric_no: formData.matricNo,
        password: formData.password,
      });
       // Check if the login was successful based on your backend response
      if (response.data.code >= 200) {
        const token = response.data.token; // You can handle the token as needed
        onLogin(formData.matricNo);
        setFormData({ matricNo: '', password: '' });
        window.location("/main")
        console.log("it worked")
        if(response.data.code == 401){
            alert('Incorrect Password or Matric Number');
          }
      } else {
        console.error('Login failed:', response.data.message);
        alert('Login failed. Please check your matric number and password and try again.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      console.log("failed")
      
    //   if (error.response) {
    //     // The request was made, but the server responded with an error status
    //     console.error('Server error:', error.response.data);
    //     alert('An error occurred on the server. Please try again later.');
    //   } else if (error.request) {
    //     // The request was made but no response was received
    //     console.error('No response from the server');
    //     alert('No response from the server. Please try again later.');
    //   } else {
    //     // Something happened in setting up the request that triggered an Error
    //     console.error('Request error:', error.message);
    //     alert('An error occurred. Please try again later.');
    //   }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Matric no:
        <input type="text" name="matricNo" value={formData.matricNo} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;