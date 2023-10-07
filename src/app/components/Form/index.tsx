import { useFormStep } from "../../hooks/use-form-step";
import { YourInfo } from "../FormStep/YourInfo";
import { Plans } from "../FormStep/Plans";
import { AddOns } from "../FormStep/AddOns";
import { Summary } from "../FormStep/Summary";

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

export function Form() {
  const { currentStep } = useFormStep();

  const step = steps.find(({ step }) => step === currentStep);

  return (
    <div className="flex flex-col flex-1 justify-between">
      {step && step.component()}
    </div>
  )
} 