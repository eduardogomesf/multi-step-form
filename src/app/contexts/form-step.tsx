import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/use-local-storage';

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

  const { getValueFromLocalStorage, saveValueToLocalStorage } = useLocalStorage()

  useEffect(() => {
    const step = getValueFromLocalStorage('currentStep')
    if (step) setCurrentStep(step)
  }, [getValueFromLocalStorage])

  const handleNextStep = () => {
    const newStepValue = currentStep + 1;
    if (currentStep < steps.length) {
      setCurrentStep(newStepValue);
      saveValueToLocalStorage('currentStep', `${newStepValue}`)
    };
  };

  const handlePreviousStep = () => {
    const newStepValue = currentStep - 1;
    if (currentStep > 1) {
      setCurrentStep(newStepValue);
      saveValueToLocalStorage('currentStep', `${newStepValue}`)
    }
  };

  return (
    <FormStepContext.Provider value={{ steps, currentStep, handleNextStep, handlePreviousStep }}>
      {children}
    </FormStepContext.Provider>
  );
};
