import Image from "next/image";
import { useEffect, useState } from "react";

interface PlanCard {
  name: string;
  price: string;
  icon: string;
  isSelected: boolean;
  handleSelectPlan?: () => void;
  freeTrialDescription: string;
  isYearlyVersion: boolean;
}

export function PlanCard({ name, price, icon, isSelected, handleSelectPlan, freeTrialDescription, isYearlyVersion }: PlanCard) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <button
      className={`
        flex gap-4 justify-start items-center w-full rounded border-[1px] border-border-grey bg-white p-4 transition duration-200
        hover:border-purple hover:bg-very-light-grey 
        ${isSelected ? 'border-purple bg-very-light-grey' : ''}
        sm:flex-col sm:gap-0 sm:justify-between sm:items-start sm:h-[181px]
      `}
      onClick={handleSelectPlan}
    >
      <Image src={icon} alt="Plan icon" width={40} height={40} />
      <div className="flex flex-col gap-1 items-start">
        <strong className="text-base font-medium text-denim">{name}</strong>
        <span className="text-sm font-normal text-grey leading-5">{price}</span>
        {(!isSmallScreen && isYearlyVersion && freeTrialDescription) && (
          <span className="text-xs font-normal text-denim">{freeTrialDescription}</span>
        )}
      </div>
    </button>
  )
}