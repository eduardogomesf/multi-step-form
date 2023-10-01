import { Fragment } from "react";
import { useFormStep } from "../../hooks/use-form-step";
import { YourInfo } from "./steps/YourInfo";
import { Plans } from "./steps/Plans";
import { AddOns } from "./steps/AddOns";

export function Form() {
  const { currentStep } = useFormStep();

  return (
    <Fragment>
      {currentStep === 1 && <YourInfo />}
      {currentStep === 2 && <Plans />}
      {currentStep === 3 && <AddOns />}
    </Fragment>
  )
} 