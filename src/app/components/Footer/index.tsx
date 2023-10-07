import { useFormStep } from "../../hooks/use-form-step";

interface FooterProps {
  handleGoBack: () => void;
  handleGoForwardStep: () => void;
}

export function Footer({ handleGoBack, handleGoForwardStep }: FooterProps) {
  const { currentStep, steps } = useFormStep();

  const numberOfSteps = steps.length;
  const isLastStep = currentStep === numberOfSteps;

  return (
    <footer className="p-4 bg-white flex justify-between items-center">
      <button
        onClick={handleGoBack}
        className={`border-none text-sm text-grey font-medium ${currentStep === 1 ? 'invisible' : 'visible'} sm:text-base`}
      >
        Go back
      </button>
      <button
        onClick={handleGoForwardStep}
        className={`${isLastStep ? 'bg-purple' : 'bg-denim'} py-3 px-4 rounded text-sm text-white font-medium sm:text-base`}
      >
        {isLastStep ? 'Confirm' : 'Next step'}
      </button>
    </footer >
  )
}