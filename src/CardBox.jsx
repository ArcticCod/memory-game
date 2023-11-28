/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "./Card";

export default function CardBox({
  score,
  setScore,
  highScore,
  setHighScore,
  clickedCards,
  setClickedCards,
  setIsOpen,
}) {
  const cards = [
    { image: "/card1.jpg", id: 1 },
    { image: "/card2.jpg", id: 2 },
    { image: "/card3.jpg", id: 3 },
    { image: "/card4.jpg", id: 4 },
    { image: "/card5.jpg", id: 5 },
    { image: "/card6.jpg", id: 6 },
    { image: "/card7.jpg", id: 7 },
    { image: "/card8.jpg", id: 8 },
    { image: "/card9.jpg", id: 9 },
    { image: "/card10.jpg", id: 10 },
  ];

  function shuffle(array) {
    let newArr = [...array];
    let currentIndex = newArr.length,
      randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [newArr[currentIndex], newArr[randomIndex]] = [
        newArr[randomIndex],
        newArr[currentIndex],
      ];
    }
    return newArr;
  }

  return (
    <div className="card-holder">
      {shuffle(cards).map((card) => {
        return (
          <Card
            setIsOpen={setIsOpen}
            highScore={highScore}
            setHighScore={setHighScore}
            clickedCards={clickedCards}
            setClickedCards={setClickedCards}
            score={score}
            setScore={setScore}
            key={card.id}
            card={card}
          />
        );
      })}
    </div>
  );
}
