import { Sidebar } from "./_components/Sidebar";

const steps = [{ title: 'Your info', number: 1 }, { title: 'Select plan', number: 2 }, { title: 'ADD-ONS', number: 3 }, { title: 'Summary', number: 4 },]

export default function Home() {
  return (
    <main className="flex flex-col sm:flex-row sm:m-4 sm:mr-0">
      <Sidebar currentStep={2} steps={steps} />
    </main>
  )
}
