import React, { useState } from "react";

const Stepper2 = () => {
  const [stepperCount, setStepperCount] = useState<number>(1);
  const array = ["first", "second", "third", "fourth", "fifth"];
  return (
    <div>
      <section style={{ display: "flex", justifyContent: "space-between" }}>
        {array.map((element, i) => {
          return (
            <div
              key={i}
              className={`${stepperCount === i + 1 && "active"} ${
                i + 1 < stepperCount && "complete"
              } `}
            >
              {element}
            </div>
          );
        })}
      </section>

      {stepperCount === 1 ? (
        <button onClick={() => setStepperCount((prev) => prev + 1)}>Next</button>
      ) : stepperCount <= array.length && stepperCount > 1 ? (
        <div>
          <button onClick={() => setStepperCount((prev) => prev - 1)}>Prev</button>
          <button onClick={() => setStepperCount((prev) => prev + 1)}>Next</button>
        </div>
      ) : (
        <button>Finish</button>
      )}
      <hr />
    </div>
  );
};

export default Stepper2;
