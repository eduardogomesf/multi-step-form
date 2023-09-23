import { Step } from "./Step";

interface Sidebar {
  currentStep: number;
  steps: Array<{
    number: number;
  }>;
}

export function Sidebar({ steps, currentStep }: Sidebar) {
  return (
    <div className="flex justify-center h-[172px] w-full bg-no-repeat	bg-cover bg-[url('/images/bg-sidebar-mobile.svg')]">
      <div className="flex flex-row mt-7 gap-4">
        {steps.map(step => {
          return (
            <Step key={step.number} step={step.number} isActive={step.number === currentStep} />
          )
        })}
      </div>
    </div>
  )
}