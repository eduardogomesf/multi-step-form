interface StepProps {
  step: number;
  isActive?: boolean;
}

export function Step({ step, isActive = false }: StepProps) {
  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${isActive ? 'border-sky-blue' : 'border-white'} ${isActive ? 'bg-sky-blue' : 'bg-none'} `}
    >
      <span className={`text-sm font-bold ${isActive ? 'text-denim' : 'text-white'}`}>
        {step}
      </span>
    </div >
  )
}