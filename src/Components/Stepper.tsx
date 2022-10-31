import React, { useState } from "react";

const Stepper = () => {
  const steps: string[] = ["first", "second", "third", "fourth", "fifth"];
  const [stepper, setStepper] = useState<number>(1);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  return (
    <div>
      <div className="container">
        {steps.map((step, i) => {
          return (
            <div
              key={i}
              className={`step-item ${stepper === i + 1 && "active"} ${
                (i + 1 < stepper || isComplete) && "complete"
              } `}
            >
              <div className="step">
                {i + 1 < stepper || isComplete ? <span>Done</span> : i + 1}
              </div>
              <p className="text-gray-500">{step}</p>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          stepper === steps.length ? setIsComplete(true) : setStepper((prev) => prev + 1);
        }}
      >
        {stepper === steps.length ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default Stepper;
