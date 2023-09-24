import { Step } from "./Step";

interface Sidebar {
  currentStep: number;
  steps: Array<{
    number: number;
    title?: string;
  }>;
}

export function Sidebar({ steps, currentStep }: Sidebar) {
  return (
    <div
      className="
      flex justify-center items-start pt-8 h-[172px] w-full bg-no-repeat bg-cover bg-[url('/images/bg-sidebar-mobile.svg')] 
      sm:flex-col sm:justify-start sm:items-start sm:p-8 sm:w-[274px] sm:h-[calc(100vh-32px)] sm:bg-[url('/images/bg-sidebar-desktop.svg')] sm:rounded-lg sm:bg-center"
    >
      <div
        className="
        flex flex-row gap-4
        sm:flex-col sm:gap-8"
      >
        {steps.map(step => {
          return (
            <Step key={step.number} step={step} isActive={step.number === currentStep} />
          )
        })}
      </div>
    </div>
  )
}