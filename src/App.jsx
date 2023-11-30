/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

// App.js
import React, { useState } from 'react';
import './App.css';
import LoginForm from './Login';
import StudentDashboard from './Dashboard'; // Import the StudentDashboard component

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [matricNo, setMatricNo] = useState('');

  const handleLogin = (matricNo) => {
    setLoggedIn(true);
    setMatricNo(matricNo);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setMatricNo('');
  };

  return (
    <div className="App">
      {loggedIn ? (
        <StudentDashboard matricNo={matricNo} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
