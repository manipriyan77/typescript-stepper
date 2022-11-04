import { useState } from "react";
import { Button, ButtonWrapper, List, ListWrapper } from "../Style/Stepper.style";

const Stepper = () => {
  const [stepperCount, setStepperCount] = useState<number>(1);
  const array = ["First", "Second", "Third", "Fourth", "Fifth"];

  return (
    <>
      <ListWrapper>
        {array.map((element, i) => {
          return (
            <List
              key={i}
              className={`${stepperCount === i + 1 && "active"} 
              ${i + 1 < stepperCount && "complete"} `}
            >
              {element}
            </List>
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
    </>
  );
};

export default Stepper;
