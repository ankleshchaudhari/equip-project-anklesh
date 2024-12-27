import React, { useState } from 'react';
import './App.css';
import RegistrationPage from './components/RegistrationPage';
import LogoutButton from './components/LogoutButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <h2>Welcome to the Dashboard</h2>
          <LogoutButton onLogout={() => setIsLoggedIn(false)} />
        </div>
      ) : (
        <RegistrationPage onRegistrationSuccess={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
