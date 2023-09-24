import React, { useState } from "react";
import "./StepperComponent.css";
import { Button } from "@progress/kendo-react-buttons";

const StepperComponent = ({
  steps,
  handleNextStep,
  handlePreviousStep,
  activeStep,
  setActiveStep,
  handleStepClick,
}) => {
  const getClipPath = (index) => {
    switch (index) {
      case 0:
        return "polygon(95% 0%, 100% 50%, 95% 100%, 0% 100%, 0% 50%, 0% 0%)";
      case steps.length - 1:
        return "polygon(100% 0px, 100% 50%, 100% 99%, 0% 100%, 6% 50%, 0% 0%)";
      default:
        return "";
    }
  };

  return (
    <div style={{ padding:"100px 108px 24px 108px", width:"100%"}}>
      <div className="stepper-container">
        {steps?.map((step, index) => (
          <div
            key={index}
            className={`step ${
              index < activeStep
                ? "completed"
                : index === activeStep
                ? "active"
                : ""
            }`}
            onClick={() => handleStepClick(index)}
            style={{
              clipPath: getClipPath(index),
            }}
          >
            <div className="step-number">Step {index + 1}</div>
          </div>
        ))}
      </div>
      <div className="step-content">
        {steps[activeStep] ? steps[activeStep]?.component : "Step not found"}
      </div>
    </div>
  );
};

export default StepperComponent;
