import React, { useState, useEffect } from "react";
import "./App.css";

/**
 * SNAKE GAME MAIN APP
 * Layout: Scoreboard (top), game grid (center), controls (bottom)
 * Visual theme: minimal, light, accent color #FFD600, primary #4CAF50, secondary #222222
 * PUBLIC_INTERFACE
 */
function App() {
  // Prepare UI state (game and grid logic not yet implemented)
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("ready"); // ready | running | paused | gameover

  // The grid dimensions
  const GRID_SIZE = 16; // 16x16

  // UI: Controls
  function handleStart() {
    setStatus("running");
    // (Implement logic in next steps)
  }
  function handlePause() {
    setStatus((prev) => (prev === "running" ? "paused" : prev));
    // (Implement logic in next steps)
  }
  function handleRestart() {
    setStatus("ready");
    setScore(0);
    // (Implement logic in next steps)
  }

  // Render empty cells for now
  function renderGrid() {
    const rows = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      const cells = [];
      for (let x = 0; x < GRID_SIZE; x++) {
        cells.push(
          <div key={x} className="snake-cell"></div>
        );
      }
      rows.push(
        <div key={y} className="snake-row">
          {cells}
        </div>
      );
    }
    return rows;
  }

  return (
    <div className="snake-root">
      {/* Scoreboard */}
      <div className="snake-scoreboard">
        <div className="snake-title">🐍 SNAKE GAME</div>
        <div className="snake-score">
          Score: <span>{score}</span>
        </div>
        {status === "gameover" && (
          <div className="snake-gameover">
            <span>Game Over</span>
          </div>
        )}
      </div>
      {/* Game grid */}
      <div className="snake-board-container">
        <div className="snake-board">{renderGrid()}</div>
      </div>
      {/* Controls */}
      <div className="snake-controls">
        <button
          className="snake-btn"
          onClick={handleStart}
          disabled={status === "running" || status === "gameover"}
        >
          Start
        </button>
        <button
          className="snake-btn"
          onClick={handlePause}
          disabled={status !== "running"}
        >
          Pause
        </button>
        <button className="snake-btn" onClick={handleRestart}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default App;
