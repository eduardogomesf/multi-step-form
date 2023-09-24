'use client'

import { useState } from "react";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Sidebar } from "./components/Sidebar";

const steps = [{ title: 'Your info', number: 1 }, { title: 'Select plan', number: 2 }, { title: 'ADD-ONS', number: 3 }, { title: 'Summary', number: 4 },]

export default function Home() {
  const [currentStep, setCurrentStep] = useState(2)

  function handleNextStep() {
    if (currentStep === steps.length) return
    setCurrentStep(currentStep + 1)
  }

  function handlePreviousStep() {
    if (currentStep === 1) return
    setCurrentStep(currentStep - 1)
  }

  return (
    <main className={`
      flex flex-col h-screen
      sm:flex-row sm:m-4 sm:mr-0 sm:h-[calc(100vh-32px)]`
    }>
      <Sidebar currentStep={currentStep} steps={steps} />
      <div className="flex flex-col flex-1 justify-between sm:max-w-[550px] sm:flex-0 sm:mx-auto">
        <div className="mx-4 flex justify-center">
          <Form />
        </div>
        <Footer
          currentStep={currentStep}
          numberOfSteps={steps.length}
          nextStep={handleNextStep}
          previousStep={handlePreviousStep}
        />
      </div>
    </main >
  )
}
