import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TicTacToe from "./components/TicTacToe";
import RockPaperScissors from "./components/RockPaperScissors";
import Home from "./components/Home";
import "./App.css";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="logo">Game Hub</Link>
    <div className="nav-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/tictactoe" className="nav-link">Tic-Tac-Toe</Link>
      <Link to="/rockpaperscissors" className="nav-link">Rock-Paper-Scissors</Link>
    </div>
  </nav>
);

const Sidebar = () => (
  <aside className="sidebar">
    <h2>Games</h2>
    <ul>
      <li><Link to="/tictactoe">Tic-Tac-Toe</Link></li>
      <li><Link to="/rockpaperscissors">Rock-Paper-Scissors</Link></li>
    </ul>
  </aside>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="/rockpaperscissors" element={<RockPaperScissors />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;