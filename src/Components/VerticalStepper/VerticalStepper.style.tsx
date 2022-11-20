import styled from "styled-components";

export const VerticalStepperWrapper = styled.div`
  width: 400px;
  margin: auto;
`;

export const ButtonWrapper = styled.div``;

export const ButtonContained = styled.button`
  display: inline-flex;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 16px;
  border-radius: 4px;
  color: #fff;
  background-color: #1976d2;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%),
    0px 1px 5px 0px rgb(0 0 0 / 12%);
  margin-top: 8px;
  margin-right: 8px;
`;

export const ButtonTransparent = styled.button`
  display: inline-flex;

  align-items: center;

  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  padding: 0;
  cursor: pointer;

  user-select: none;
  vertical-align: middle;

  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 8px;
  border-radius: 4px;

  color: #1976d2;
  margin-top: 8px;
  margin-right: 8px;

  &:hover {
    background-color: rgba(25, 118, 210, 0.04);
  }
`;

export const StepperText = styled.div`
  margin-left: 12px;
  padding-left: 20px;
  padding-right: 8px;
  border-left: 1px solid #bdbdbd;
`;

export const StepperHeadingWrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  align-items: center;
  text-align: left;
  padding: 8px 0;
`;

export const CircleNumber = styled.span`
  width: 20px;
  height: 20px;
  background-color: #1976d2;
  border-radius: 50px;
  color: white;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepperHeading = styled.span`
  margin-left: 10px;
`;

export const ButtonTransparentDisabled = styled.button`
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  padding: 0;
  cursor: context-menu;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 8px;
  border-radius: 4px;
  margin-top: 8px;
  margin-right: 8px;
  color: grey;
`;
