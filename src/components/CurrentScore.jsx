import { useState } from "react";

const CurrentScore = (props) => {
  const [count, setCount] = useState(0);
  const [buttonValue, setButtonValue] = useState(1);

  function raiseButton() {
    if (count > 10) {
      setButtonValue(buttonValue + 1);
      setCount(count - 10);
    } else {
      alert("Your Broke! Can't buy no points!!!!");
    }
  }

  function raiseCount() {
    setCount(count + buttonValue);
  }

  function gameReset() {
    setButtonValue(1);
    setCount(0);
  }

  return (
    <main>
      {count < 100 ? (
        <>
          <div>
            <h1>Current Score:{count} </h1>
            <div>
              <button onClick={raiseCount()}>+{buttonValue}</button>
              <button onClick={raiseButton()}>
                "Pay 10 points to change from + {buttonValue} to +{" "}
                {buttonValue + 1}"
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>Current Score:{count} </h1>
          <h2>You WIN!!!!!</h2>
          <button onClick={gameReset()}>Play Again?!</button>
        </>
      )}
    </main>
  );
};

export default CurrentScore;
