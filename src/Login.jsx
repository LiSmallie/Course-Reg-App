// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './index.css'; // Import Tailwind CSS styles

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

    try {
      const response = await axios.post('http://localhost:3001/login', {
        Matric_no: formData.matricNo,
        password: formData.password,
      });

      if (response.data.code >= 200) {
        const token = response.data.token;
        onLogin(formData.matricNo);
        setFormData({ matricNo: '', password: '' });
        window.location("/main");
        console.log("it worked");
        if (response.data.code === 401) {
          alert('Incorrect Password or Matric Number');
        }
      } else {
        console.error('Login failed:', response.data.message);
        alert('Login failed. Please check your matric number and password and try again.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      console.log("failed");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="card-title mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4 text-left">
            Matric no:
            <input
              type="text"
              name="matricNo"
              value={formData.matricNo}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="block mb-4 text-left">
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <button type="submit" className="form-button animated-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;