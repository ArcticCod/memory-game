import { useEffect, useState } from "react";
import "./App.css";
import CardBox from "./CardBox";
import Modal from "./Modal";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="title">Memory Crows </div>
          <div className="scoreboard">
            Score: {score} - Best: {highScore}
          </div>
          <div className="instructions">Select each card only once</div>
        </div>
        {isOpen && (
          <Modal
            setIsOpen={setIsOpen}
            setScore={setScore}
            score={score}
            highScore={highScore}
          />
        )}
        <CardBox
          isOpen={isOpen}
          clickedCards={clickedCards}
          setClickedCards={setClickedCards}
          highScore={highScore}
          score={score}
          setScore={setScore}
          setHighScore={setHighScore}
          setIsOpen={setIsOpen}
        />

        <div className="footer">
          <button
            onClick={() => {
              setScore(0);
              setHighScore(0);
              setClickedCards([]);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
