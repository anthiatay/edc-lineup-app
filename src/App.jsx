import { useState } from 'react';
import lineup from './edcLineup';
import StageBlock from './StageBlock';
import './App.css';

function App() {
  const [selectedDay, setSelectedDay] = useState("");

  return (
    <div className="app-container">
      <div className="app-content">
        <h1>EDC Las Vegas 2024 Lineup 🎡</h1>

        <div className="day-section">
          <div className="day-title">{selectedDay}</div>
        </div>

        <div className="day-buttons">
          {["Friday", "Saturday", "Sunday"].map(day => (
            <button key={day} onClick={() => setSelectedDay(day)}>
              {day}
            </button>
          ))}
        </div>

        {selectedDay &&
          Object.entries(lineup[selectedDay]).map(([stage, artists]) => (

            <StageBlock key={stage} stage={stage} artists={artists} />
          ))}
      </div>
    </div>
  );
}

export default App;
import { useState } from 'react';
import lineup from './edcLineup';
import StageBlock from './StageBlock';
import './App.css';

function App() {
  const [selectedDay, setSelectedDay] = useState("");

  return (
    <div className="app-container">
      <div className="app-content">
        <h1>EDC Las Vegas 2024 Lineup 🎡</h1>

        <div className="day-section">
          <div className="day-title">{selectedDay}</div>
        </div>

        <div className="day-buttons">
          {["Friday", "Saturday", "Sunday"].map(day => (
            <button key={day} onClick={() => setSelectedDay(day)}>
              {day}
            </button>
          ))}
        </div>

        {selectedDay &&
          Object.entries(lineup[selectedDay]).map(([stage, artists]) => (
            <StageBlock key={stage} stage={stage} artists={artists} />
          ))}
      </div>
    </div>
  );
}

export default App;