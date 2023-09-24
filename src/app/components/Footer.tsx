interface FooterProps {
  previousStep: () => void;
  nextStep: () => void;
  currentStep: number;
  numberOfSteps: number;
}

export function Footer({ previousStep, nextStep, currentStep, numberOfSteps }: FooterProps) {
  const isLastStep = currentStep === numberOfSteps;

  return (
    <footer className="p-4 bg-white flex justify-between items-center">
      <button
        onClick={previousStep}
        className={`border-none text-sm text-grey font-medium ${currentStep === 1 ? 'invisible' : 'visible'} sm:text-base`}
      >
        Go back
      </button>
      <button
        onClick={nextStep}
        className={`${isLastStep ? 'bg-purple' : 'bg-denim'} py-3 px-4 rounded text-sm text-white font-medium sm:text-base`}
      >
        {isLastStep ? 'Confirm' : 'Next step'}
      </button>
    </footer >
  )
}