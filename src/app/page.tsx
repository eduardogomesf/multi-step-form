'use client'

import { Footer } from "./components/Footer";
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
        <div className="flex flex-col flex-1 justify-between sm:max-w-[550px] sm:flex-0 sm:mx-auto">
          <div className="mx-4 flex justify-center">
            <Form />
          </div>
          <Footer />
        </div>
      </main >
    </FormStepProvider>

  )
}
