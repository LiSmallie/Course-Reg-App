// CourseSelectionPage.js
import React, { useState } from 'react';

const CourseSelectionPage = ({ availableCourses, registeredCourses, onSubmitRegistration }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleCourseSelection = (Course_code) => {
    if (!selectedCourses.includes(Course_code)) {
      // Add the course to the selected courses list
      setSelectedCourses([...selectedCourses, Course_code]);
    } else {
      // Remove the course from the selected courses list
      setSelectedCourses(selectedCourses.filter((id) => id !== Course_code));
    }
  };

  const handleSubmitRegistration = () => {
    // You can send the selectedCourses data to the backend for registration
    onSubmitRegistration(selectedCourses);
    // Clear the selected courses list after submission
    setSelectedCourses([]);
  };

  return (
    <div>
      <h3>Available Courses</h3>
      <ul>
        {availableCourses.map((course) => (
          <li key={course.id}>
            {course.name}{' '}
            <button onClick={() => handleCourseSelection(course.id)}>
              {selectedCourses.includes(course.id) ? 'Deselect' : 'Select'}
            </button>
          </li>
        ))}
      </ul>

      <h3>Selected Courses</h3>
      <ul>
        {selectedCourses.map((courseId) => (
          <li key={courseId}>{availableCourses.find((course) => course.id === courseId)?.name}</li>
        ))}
      </ul>

      <h3>Registered Courses</h3>
      <ul>
        {registeredCourses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>

      <button onClick={handleSubmitRegistration}>Submit Registration</button>
    </div>
  );
};

export default CourseSelectionPage;
