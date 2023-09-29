import Image from "next/image";

interface PlanCard {
  name: string;
  price: string;
  icon: string;
  isSelected: boolean;
  handleSelectPlan?: () => void;
}

export function PlanCard({ name, price, icon, isSelected, handleSelectPlan }: PlanCard) {
  return (
    <button
      className={`
        flex gap-4 justify-start items-center w-full rounded border-[1px] border-border-grey bg-white p-4 transition duration-200
        hover:border-purple hover:bg-very-light-grey 
        ${isSelected ? 'border-purple bg-very-light-grey' : ''}
      `}
      onClick={handleSelectPlan}
    >
      <Image src={icon} alt="Plan icon" width={40} height={40} />
      <div className="flex flex-col gap-1">
        <strong>{name}</strong>
        <span>{price}</span>
      </div>
    </button>
  )
}