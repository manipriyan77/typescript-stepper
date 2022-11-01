import React, { useState } from "react";
import { Button, ButtonWrapper, ListWrapper, StepperWrapper } from "../Style/Stepper.style";

const Stepper = () => {
  const [stepperCount, setStepperCount] = useState<number>(1);
  const array = ["first", "second", "third", "fourth", "fifth"];
  return (
    <>
      <ListWrapper>
        {array.map((element, i) => {
          return (
            <li
              key={i}
              className={`${stepperCount === i + 1 && "active"} ${
                i + 1 < stepperCount && "complete"
              } `}
            >
              {element}
            </li>
          );
        })}
      </ListWrapper>

      {stepperCount === 1 ? (
        <ButtonWrapper>
          <Button onClick={() => setStepperCount((prev) => prev + 1)}>Next</Button>
        </ButtonWrapper>
      ) : stepperCount <= array.length && stepperCount > 1 ? (
        <ButtonWrapper>
          <Button onClick={() => setStepperCount((prev) => prev - 1)}>Prev</Button>
          <Button onClick={() => setStepperCount((prev) => prev + 1)}>Next</Button>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <Button>Finish</Button>
        </ButtonWrapper>
      )}

      {/* <div>
        <ul>
          {array.map((element, i) => {
            return (
              <li
                key={i}
                className={`${stepperCount === i + 1 && "active"} ${
                  i + 1 < stepperCount && "complete"
                } `}
              >
                {element}
              </li>
            );
          })}
        </ul>
      </div> */}
    </>
  );
};

export default Stepper;
