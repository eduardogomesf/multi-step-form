'use client'

import { FormStep } from "./components/FormStep";
import { Sidebar } from "./components/Sidebar";
import { FormProvider } from "./contexts/form";

import { FormStepProvider } from "./contexts/form-step";

export default function Home() {
  return (
    <FormStepProvider>
      <FormProvider>
        <main className={`
          flex flex-col min-h-screen
          sm:flex-row sm:m-4 sm:mr-0 sm:h-[calc(100vh-32px)]`
        }>
          <Sidebar />
          <div className="flex flex-1 sm:max-w-[550px] sm:flex-0 sm:mx-auto">
            <FormStep />
          </div>
        </main >
      </FormProvider>
    </FormStepProvider>
  )
}
