import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const GameCard = ({ title, description, image, path }) => (
  <div className="game-card">
    <div className="game-card-image" style={{ backgroundImage: `url(${image})` }}></div>
    <div className="game-card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={path} className="play-button">Play Now</Link>
    </div>
  </div>
);

const Home = () => {
  const games = [
    {
      title: "Tic-Tac-Toe",
      description: "Classic game of X's and O's. Get three in a row to win!",
      image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      path: "/tictactoe"
    },
    {
      title: "Rock-Paper-Scissors",
      description: "Test your luck against the computer in this classic hand game!",
      image: "https://images.unsplash.com/photo-1614032686163-bdc24c13d0b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      path: "/rockpaperscissors"
    }
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Game Hub</h1>
        <p>Play your favorite games online for free!</p>
      </div>

      <div className="featured-games">
        <h2>Featured Games</h2>
        <div className="game-grid">
          {games.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
