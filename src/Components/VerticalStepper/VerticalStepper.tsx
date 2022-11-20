import React, { useState } from "react";
import {
  VerticalStepperWrapper,
  ButtonWrapper,
  ButtonContained,
  ButtonTransparent,
  StepperText,
  StepperHeadingWrapper,
  CircleNumber,
  StepperHeading,
  ButtonTransparentDisabled,
} from "./VerticalStepper.style";

const VerticalStepper = () => {
  const [stepperCount, setStepperCount] = useState<number>(1);

  const array = ["First", "Second", "Third", "Fourth", "Fifth"];
  const textArrays = [
    "For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more. ",
    "An ad group contains one or more ads which target a shared set of keywords.    ",
    "Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues.    ",
    "Try out different ad text to see what brings in the most customers, and learn how to enhanur ads, find out how to tell if they're running and how to resolve approval issues.    ",
    "Try out different ad text to see what brings in the most customers, and learn how to enhanur ads, find out how to tell if they're running and how to resolve approval issues.    ",
  ];

  return (
    <VerticalStepperWrapper>
      {textArrays.map((txt, i) => {
        return (
          <div key={i}>
            <StepperHeadingWrapper
              className={`${stepperCount === i + 1 && "active"} 
              ${i + 1 > stepperCount && "disable"} `}
            >
              <CircleNumber> {i + 1} </CircleNumber>
              <StepperHeading> {array[i]}</StepperHeading>
            </StepperHeadingWrapper>
            <StepperText>{stepperCount === i + 1 && txt}</StepperText>
            {stepperCount === i + 1 && (
              <ButtonWrapper>
                <ButtonContained onClick={() => setStepperCount((prev) => prev + 1)}>
                  {i === textArrays.length - 1 ? "Finish" : "Continue"}
                </ButtonContained>
                {stepperCount === 1 ? (
                  <ButtonTransparentDisabled disabled>Back</ButtonTransparentDisabled>
                ) : (
                  <ButtonTransparent onClick={() => setStepperCount((prev) => prev - 1)}>
                    Back
                  </ButtonTransparent>
                )}
              </ButtonWrapper>
            )}
          </div>
        );
      })}

      {stepperCount <= textArrays.length ? (
        ""
      ) : (
        <ButtonWrapper>
          <div> All steps completed - you're finished</div>
          <ButtonTransparent onClick={() => setStepperCount(1)}>Reset</ButtonTransparent>
        </ButtonWrapper>
      )}
    </VerticalStepperWrapper>
  );
};

export default VerticalStepper;
