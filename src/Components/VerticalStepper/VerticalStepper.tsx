import React, { useState } from "react";
import { VerticalStepperWrapper } from "./VerticalStepper.style";

const VerticalStepper = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const array = ["First", "Second", "Third", "Fourth", "Fifth"];
  const textArrays = [
    "For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more. ",
    "An ad group contains one or more ads which target a shared set of keywords.    ",
    "Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues.    ",
  ];

  return (
    <>
      <VerticalStepperWrapper>
        {array.map((text, index) => {
          return (
            <div>
              <div>
                <span>{index + 1}</span>
                {text}
              </div>
              <div>
                {textArrays.map((ele, index) => {
                  return <div>{isOpen && ele}</div>;
                })}
              </div>
            </div>
          );
        })}
      </VerticalStepperWrapper>
    </>
  );
};

export default VerticalStepper;
