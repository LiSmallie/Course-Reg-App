// StudentDashboard.js
import React, { useState, useEffect } from 'react';
import PersonalDetailsPage from './Personal details';
// import AnnouncementPage from './AnnouncementPage';
import CourseSelectionPage from './Course Selection';

const StudentDashboard = ({ matricNo }) => {
  const [currentPage, setCurrentPage] = useState('personalDetails');
  const [personalDetails, setPersonalDetails] = useState({});
//   const [announcements, setAnnouncements] = useState([]);
  const [courseSelection, setCourseSelection] = useState([]);

  useEffect(() => {
    // Fetch personal details, announcements, and course selection data based on matricNo
    // Replace the following fetch calls with actual API requests

    // Fetch personal details
    fetch(`http://localhost:3001/api/personal-details/${matricNo}`) // Fixed the URL
      .then((response) => response.json())
      .then((data) => setPersonalDetails(data))
      .catch((error) => console.error('Error fetching personal details:', error));

    // Fetch announcements
    // fetch(`/api/announcements`)
    //   .then((response) => response.json())
    //   .then((data) => setAnnouncements(data))
    //   .catch((error) => console.error('Error fetching announcements:', error));

    // Fetch course selection
    fetch(`http://localhost:3001/api/course-selection/${matricNo}`) // Fixed the URL
      .then((response) => response.json())
      .then((data) => setCourseSelection(data))
      .catch((error) => console.error('Error fetching course selection:', error));
  }, [matricNo]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h2>Welcome to the Student Dashboard, {matricNo}!</h2>
      <nav>
        <button onClick={() => handlePageChange('personalDetails')}>Personal Details</button>
        {/* <button onClick={() => handlePageChange('announcements')}>Announcements</button> */}
        <button onClick={() => handlePageChange('courseSelection')}>Course Selection</button>
      </nav>
      {currentPage === 'personalDetails' && <PersonalDetailsPage details={personalDetails} />}
      {/* {currentPage === 'announcements' && <AnnouncementPage announcements={announcements} />} */}
      {currentPage === 'courseSelection' && <CourseSelectionPage courses={courseSelection} />}
    </div>
  );
};

export default StudentDashboard;
