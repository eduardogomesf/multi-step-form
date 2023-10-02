import { Fragment } from "react";
import { useFormStep } from "../../hooks/use-form-step";
import { YourInfo } from "./steps/YourInfo";
import { Plans } from "./steps/Plans";
import { AddOns } from "./steps/AddOns";
import { Summary } from "./steps/Summary";

export function Form() {
  const { currentStep } = useFormStep();

  return (
    <div className="flex flex-col flex-1 justify-between">
      {currentStep === 1 && <YourInfo />}
      {currentStep === 2 && <Plans />}
      {currentStep === 3 && <AddOns />}
      {currentStep === 4 && <Summary />}
    </div>
  )
} 