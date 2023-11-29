/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Card({
  clickedCards,
  setClickedCards,
  setScore,
  card,
  score,
  highScore,
  setHighScore,
  setIsOpen,
  isOpen,
}) {
  return (
    <div className="fader">
      <button
        className={`card-button`}
        id={`${card.id}`}
        style={{ backgroundImage: `url(${card.image})` }}
        onClick={() => {
          if (!isOpen) {
            if (!clickedCards.includes(card.id)) {
              setScore(score + 1);
              clickedCards.push(card.id);
              setClickedCards(clickedCards);
            } else {
              console.log(clickedCards);

              if (score > highScore) {
                setHighScore(score);
              }
              // setScore(0);
              setClickedCards([]);
              setIsOpen(true);
            }
          }
        }}
      ></button>
    </div>
  );
}
