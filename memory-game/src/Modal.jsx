import React from "react";

const Modal = ({ setIsOpen, score, highScore, setScore }) => {
  return (
    <>
      <div className={"darkBG"} />
      <div className={"centered"}>
        <div className={"modal"}>
          <div className={"modalHeader"}>
            <h5 className={"heading"}>Game Over!</h5>
          </div>
          <button
            className={"closeBtn"}
            onClick={() => setIsOpen(false)}
          ></button>
          <div className={"modalContent"}>
            Score: {score} - Best: {highScore}
          </div>
          <div className={"modalActions"}>
            <div className={"actionsContainer"}>
              <button
                className={"deleteBtn"}
                onClick={() => {
                  setIsOpen(false);
                  setScore(0);
                }}
              >
                Play Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
