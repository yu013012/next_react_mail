import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="back" onClick={toggleMenu}>
          &#8592;
        </div>
        <button className="logout">Logout</button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className={`title ${isMenuOpen ? 'open' : ''}`}>メール一覧</div>
      <div className="content">
        <div className="mail">
          <p>test</p>
          <p className="mail-time">2023/09/01</p>
        </div>
        <div className="mail">
          <p>test</p>
          <p className="mail-time">2023/09/01</p>
        </div>
      </div>
    </div>
  );
}

export default App;
