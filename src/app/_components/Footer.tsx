interface FooterProps {
  previousStep: () => void;
  nextStep: () => void;
}

export function Footer({ previousStep, nextStep }: FooterProps) {
  return (
    <footer className="p-4 bg-white flex justify-between items-center">
      <button onClick={previousStep} className="border-none text-sm text-grey font-medium">Go back</button>
      <button onClick={nextStep} className="bg-denim py-3 px-4 rounded text-sm text-white font-medium" >Next step</button>
    </footer>
  )
}