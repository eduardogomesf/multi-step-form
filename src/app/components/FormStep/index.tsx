import { useFormStep } from "../../hooks/use-form-step";

import { YourInfo } from "./YourInfo";
import { Plans } from "./Plans";
import { AddOns } from "./AddOns";
import { Summary } from "./Summary";

const steps = [
  {
    step: 1,
    component: YourInfo
  },
  {
    step: 2,
    component: Plans
  },
  {
    step: 3,
    component: AddOns
  },
  {
    step: 4,
    component: Summary
  }
]

export function FormStep() {
  const { currentStep } = useFormStep();

  const step = steps.find(({ step }) => step === currentStep);

  return (
    <div className="flex flex-col flex-1 justify-between">
      {step && step.component()}
    </div>
  )
} 