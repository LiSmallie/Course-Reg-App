import React, { useState, useEffect } from 'react';
import PersonalDetailsPage from './Personal details';
import CourseSelectionPage from './Course Selection';
import './index.css'; // Import Tailwind CSS

const StudentDashboard = ({ matricNo }) => {
  const [currentPage, setCurrentPage] = useState('personalDetails');
  const [personalDetails, setPersonalDetails] = useState({});
  const [courseSelection, setCourseSelection] = useState([]);

  useEffect(() => {
    // Fetch data...
  }, [matricNo]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Welcome to the Student Dashboard, {matricNo}!</h2>
      <nav className="mb-8">
        <button
          className={`mr-4 ${currentPage === 'personalDetails' && 'bg-blue-500 text-white'}`}
          onClick={() => handlePageChange('personalDetails')}
        >
          Personal Details
        </button>
        <button
          className={`mr-4 ${currentPage === 'courseSelection' && 'bg-blue-500 text-white'}`}
          onClick={() => handlePageChange('courseSelection')}
        >
          Course Selection
        </button>
      </nav>
      {currentPage === 'personalDetails' && (
        <PersonalDetailsPage details={personalDetails} />
      )}
      {currentPage === 'courseSelection' && (
        <CourseSelectionPage courses={courseSelection} />
      )}
    </div>
  );
};

export default StudentDashboard;
