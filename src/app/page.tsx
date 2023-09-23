import { Sidebar } from "./_components/Sidebar";

const steps = [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 },]

export default function Home() {
  return (
    <main className="flex">
      <Sidebar currentStep={2} steps={steps} />
    </main>
  )
}
