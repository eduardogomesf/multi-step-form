import { useFormStep } from "../../hooks/use-form-step";
import { Step } from "./Step";

export function Sidebar() {
  const { currentStep, steps } = useFormStep();

  return (
    <div
      className="
      flex justify-center items-start pt-8 h-[172px] w-full bg-no-repeat bg-cover bg-[url('/images/bg-sidebar-mobile.svg')] 
      sm:flex-col sm:justify-start sm:items-start sm:p-8 sm:w-[274px] sm:h-[calc(100vh-32px)] sm:bg-[url('/images/bg-sidebar-desktop.svg')] sm:rounded-lg sm:bg-center"
    >
      <div
        className="flex flex-row gap-4 sm:flex-col sm:gap-8">
        {steps.map(step => {
          return (
            <Step
              key={step.number}
              step={step}
              isActive={step.number === currentStep}
            />
          )
        })}
      </div>
    </div>
  )
}