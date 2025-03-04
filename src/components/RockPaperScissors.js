import React, { useState, useEffect } from "react";
import "./GameStyles.css";

const choices = [
  { id: "Rock", icon: "✊" },
  { id: "Paper", icon: "✋" },
  { id: "Scissors", icon: "✌️" }
];

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [scores, setScores] = useState({ player: 0, computer: 0, ties: 0 });
  const [playing, setPlaying] = useState(false);

  const playGame = (choice) => {
    setPlaying(true);
    setPlayerChoice(choice);
    
    setTimeout(() => {
      const computer = choices[Math.floor(Math.random() * choices.length)];
      setComputerChoice(computer);
      
      // Determine winner
      if (choice.id === computer.id) {
        setResult("It's a tie!");
        setScores(prev => ({ ...prev, ties: prev.ties + 1 }));
      } else if (
        (choice.id === "Rock" && computer.id === "Scissors") ||
        (choice.id === "Paper" && computer.id === "Rock") ||
        (choice.id === "Scissors" && computer.id === "Paper")
      ) {
        setResult("You Win!");
        setScores(prev => ({ ...prev, player: prev.player + 1 }));
      } else {
        setResult("You Lose!");
        setScores(prev => ({ ...prev, computer: prev.computer + 1 }));
      }
      
      setPlaying(false);
    }, 1000);
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");
  };

  return (
    <div className="game-container">
      <h2 className="game-title">Rock-Paper-Scissors</h2>
      
      <div className="score-board">
        <div className="score">You: {scores.player}</div>
        <div className="score">Computer: {scores.computer}</div>
        <div className="score">Ties: {scores.ties}</div>
      </div>
      
      <div className="rps-choices">
        {choices.map((choice) => (
          <button 
            key={choice.id}
            className={`rps-choice ${playerChoice?.id === choice.id ? 'selected' : ''}`}
            onClick={() => playGame(choice)}
            disabled={playing}
          >
            <span className="choice-icon">{choice.icon}</span>
            <span className="choice-text">{choice.id}</span>
          </button>
        ))}
      </div>

      {(playerChoice && computerChoice) && (
        <div className="rps-result">
          <div className={`result-display ${result.includes("Win") ? "winner" : ""}`}>
            <div className="choice-display">
              <div className="choice-label">You chose</div>
              <div className="choice-icon large">{playerChoice.icon}</div>
              <div className="choice-text">{playerChoice.id}</div>
            </div>
            
            <div className="versus">VS</div>
            
            <div className="choice-display">
              <div className="choice-label">Computer chose</div>
              <div className="choice-icon large">{computerChoice.icon}</div>
              <div className="choice-text">{computerChoice.id}</div>
            </div>
          </div>
          
          <div className={`result-text ${
            result.includes("Win") ? "win" : 
            result.includes("Lose") ? "lose" : "tie"
          }`}>
            {result}
          </div>
          
          <button className="play-again-button" onClick={resetGame}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
