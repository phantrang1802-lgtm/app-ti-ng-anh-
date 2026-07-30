import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src="/image.png" 
          alt="English App" 
          style={{ width: '300px', borderRadius: '10px' }} 
        />
        <h1>Xin chào! Tôi là App Học Tiếng Anh</h1>
        <p>Hãy bắt đầu học ngay hôm nay!</p>
      </header>
    </div>
  );
}

export default App;