import React, { useState } from 'react';
import '.././App.css'; 

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleUpdate = (value) => {
    setProgress((prev) => {
      const nextValue = prev + value;
      return Math.min(Math.max(nextValue, 0), 100);
    });
  };

  const progressContainerStyle = {
    width: '100%',
    height: '24px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    overflow: 'hidden',
    marginTop: '2rem',
    border: '1px solid #646cff',
  };

  const progressBarStyle = {
    width: `${progress}%`,
    height: '100%',
    backgroundColor: '#646cff',
    transition: 'width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  };

  return (
    <div className="card">
      <h1>Progress: {progress}%</h1>
      
      <div style={progressContainerStyle}>
        <div style={progressBarStyle}>
          {progress > 10 && `${progress}%`}
        </div>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1em', justifyContent: 'center' }}>
        <button onClick={() => handleUpdate(-10)} disabled={progress === 0}>
          Decrease -10
        </button>
        
        <button onClick={() => handleUpdate(10)} disabled={progress === 100}>
          Increase +10
        </button>
        
        <button 
          onClick={() => setProgress(0)} 
          style={{ borderColor: progress > 0 ? '#ff4646' : 'transparent' }}
        >
          Reset
        </button>
      </div>

      <p className="read-the-docs">
        Click the buttons to manipulate the state.
      </p>
    </div>
  );
};

export default ProgressBar;