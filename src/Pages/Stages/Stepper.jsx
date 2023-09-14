import React, { useState } from "react";
import {Stage5} from "./Stage5";
import Stage1 from "./Stage1";
import Stage4 from "./Stage4";
import Stage2 from "./Stage2";
import Stage3 from "./Stage3";
import StepperComponent from "../../components/stepper/StepperComponent";
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header";



const customSteps = [
  { 
    label: "Stage 1",
    component: <Stage1 />,
  },
  {
    label: "Stage 2",
    component: <Stage2 />,
  },
  {
    label: "Stage 3",
    component: <Stage3 />,
  },
  {
    label: "Stage 4",
    component: <Stage4 />,
  },
  {
    label: "Stage 5",
    component: <Stage5 />,
  },
];

const Stepper = () => {
  //  const location = useLocation();
  const [loc, setLoc] = useState(window.location.href.split('/'));
   console.log('location', loc);

  return (
    <>
    <div className="" style={{ width:"100%"}}>
      <Header/>
      <StepperComponent steps={customSteps} />
      <Footer margin={loc[3]} />
    </div>
    <div>
    
    </div>
    </>
  );
};

export default Stepper;
