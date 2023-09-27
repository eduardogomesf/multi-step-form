import { Fragment } from "react";
import { useFormStep } from "../../hooks/use-form-step";
import { YourInfo } from "./steps/YourInfo";

export function Form() {
  const { currentStep } = useFormStep();

  return (
    <Fragment>
      {currentStep === 1 && <YourInfo />}
    </Fragment>
  )
} 