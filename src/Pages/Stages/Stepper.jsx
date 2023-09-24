import React, { useState } from "react";
import { Stage5 } from "./Stage5";
import Stage1 from "./Stage1";
import Stage4 from "./Stage4";
import Stage2 from "./Stage2";
import Stage3 from "./Stage3";
import StepperComponent from "../../components/stepper/StepperComponent";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Stepper = () => {
  const [loc, setLoc] = useState(window.location.href.split("/"));
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => setActiveStep(index);
  const handleNextStep = () => {
    console.log("next step called");
    setActiveStep((prevStep) => prevStep + 1);
  };
  const handlePreviousStep = () => setActiveStep((prevStep) => prevStep - 1);

  const customSteps = [
    {
      id: "1",
      label: "Stage 1",
      component: <Stage1 handleNextStep={handleNextStep} />,
    },
    {
      label: "Stage 2",
      component: (
        <Stage2
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      ),
    },
    {
      label: "Stage 3",
      component: (
        <Stage3
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      ),
    },
    {
      label: "Stage 4",
      component: (
        <Stage4
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      ),
    },
    {
      label: "Stage 5",
      component: <Stage5 />,
    },
  ];

  return (
    <>
      <div className="" style={{ width: "100%" }}>
        <Header />
        <StepperComponent
          steps={customSteps}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          handleStepClick={handleStepClick}
        />
        <Footer margin={loc[3]} />
      </div>
      <div></div>
    </>
  );
};

export default Stepper;
