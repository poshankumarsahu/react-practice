import React, { useState } from 'react';

const WelcomeForm = () => {
  const [name, setName] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleButton = () => {
    const trimmedName = name.trim();

    if (trimmedName) {
      alert(`Welcome, ${trimmedName}!`);
      setDisplayName(trimmedName);
      setName('');
    } else {
      alert('Please enter a name');
    }
  };

  return (
    <div className="App">
      <div className="App-body">
        <h2>Welcome Application</h2>
        <div className="Main-box">
          <div className="input-container">
            <input
              type="text"
              className="centered-input"
              placeholder="Enter your Name"
              value={name}
              onChange={handleName}
            />
            {displayName && (
              <p className="name-display">Hello, {displayName}!</p>
            )}
            <button
              className="submit-button"
              onClick={handleButton}
              disabled={!name.trim()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeForm;