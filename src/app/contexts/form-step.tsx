import { createContext, useState } from 'react';

type FormStepContextData = {
  currentStep: number;
  steps: { title: string; number: number }[];
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

export const FormStepContext = createContext({
  currentStep: 2,
  steps: [],
  handleNextStep: () => {},
  handlePreviousStep: () => {},
} as FormStepContextData);

interface FormStepProviderProps {
  children: React.ReactNode;
}

export const FormStepProvider = ({ children }: FormStepProviderProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, _] = useState([
    { title: 'Your info', number: 1 },
    { title: 'Select plan', number: 2 },
    { title: 'ADD-ONS', number: 3 },
    { title: 'Summary', number: 4 },
  ])

  const handleNextStep = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <FormStepContext.Provider value={{ steps, currentStep, handleNextStep, handlePreviousStep }}>
      {children}
    </FormStepContext.Provider>
  );
};
