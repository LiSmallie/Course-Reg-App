// PersonalDetailsPage.js
import React from 'react';

const PersonalDetailsPage = ({ details }) => {
    console.log('Received details:', details);
  return (
    <div>
      <h3>Personal Details</h3>
      <p>Matric No: {details.Matric_no}</p>
      <p>First Name: {details.first_name}</p>
      <p>Last Name: {details.last_name}</p>
      <p>Middle Name: {details.middle_name}</p>
      <p>Level: {details.level}</p>
      <p>Department: {details.course_of_study}</p>
      <p>Email: {details.email}</p>
      {/* Add more personal details as needed */}
    </div>
  );
};

export default PersonalDetailsPage;
