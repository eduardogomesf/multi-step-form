'use client'

import { Form } from "./components/Form";
import { Sidebar } from "./components/Sidebar";
import { FormStepProvider } from "./contexts/form-step";

export default function Home() {
  return (
    <FormStepProvider>
      <main className={`
      flex flex-col h-screen
      sm:flex-row sm:m-4 sm:mr-0 sm:h-[calc(100vh-32px)]`
      }>
        <Sidebar />
        <div className="flex flex-1 sm:max-w-[550px] sm:flex-0 sm:mx-auto">
          <Form />
        </div>
      </main >
    </FormStepProvider>
  )
}
