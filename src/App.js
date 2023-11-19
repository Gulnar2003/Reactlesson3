import React from 'react';
import Profil from './Profil';
import './App.css'; 

const App = () => {
  const user = {
    email: 'gulnar.eliyeva.2003@gmail.com',
    name: 'Eliyeva Gulnar',
    address: 'Aze,Baku',
    personalInfo: 'Some personal information...',
  };

  return (
    <div className="app-container">
      <Profil user={user} />
    </div>
  );
};

export default App;
