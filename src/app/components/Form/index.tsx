import { YourInfo } from "./steps/YourInfo";

interface FormProps {
  currentStep: number;
}

export function Form({ currentStep }: FormProps) {
  return (
    <div className="w-full bg-white rounded-lg px-6 py-8 mt-[calc(-1*calc(172px-96px))] sm:mt-0">
      {currentStep === 1 && <YourInfo />}
    </div>
  )
} 