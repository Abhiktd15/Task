import React from "react";
import { Stepper, Step,Button } from "@material-tailwind/react";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import Profile from "../Home/Profile.jsx";
import ProfileSetupPage from "../Home/ChoicesPage.jsx";

export function StepperPage() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);
    
    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
    
    return (
        <div className="w-full px-8 ">
            <Stepper
                className="hidden"
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
            >
                <Step onClick={() => setActiveStep(0)}>1</Step>
                <Step onClick={() => setActiveStep(1)}>2</Step>
            </Stepper>
            <div className="flex flex-row gap-4 ">
                <Link to='/home'><img src="https://logowik.com/content/uploads/images/dribbble.jpg" className="w-20 h-20 ml-10 mix-blend-multiply max-sm:ml-0"/></Link>
                <button className="border-2 rounded-lg w-10 h-9 mt-6 bg-gray-300 hover:bg-white disabled:hidden" onClick={handlePrev} disabled={isFirstStep}><FontAwesomeIcon className="hover:size-5" icon={faLessThan}/></button>
            </div>
            {activeStep===0 && <Profile/>}
            {activeStep===1 && <ProfileSetupPage/>}
            <Button className="bg-pink-500  rounded-lg font-bold text-white border-2 ml-80 mt-5 w-20 h-10 max-sm:ml-40  disabled:hidden " onClick={handleNext} disabled={isLastStep} >Next</Button>

        </div>
    );
}
