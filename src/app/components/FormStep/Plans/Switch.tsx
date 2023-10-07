import { Fragment } from "react";
import * as RadixSwitch from "@radix-ui/react-switch";

interface SwitchProps {
  isYearly: boolean;
  handlePlanTypeChange: () => void;
}

export function Switch({ isYearly, handlePlanTypeChange }: SwitchProps) {
  return (
    <Fragment>
      <span className={`text-sm font-normal ${isYearly ? 'text-grey' : 'text-denim'} duration-100`}>
        Monthly
      </span>

      <RadixSwitch.Root
        checked={isYearly}
        onCheckedChange={handlePlanTypeChange}
        className={`
              w-[40px] h-[20px] p-1 relative bg-denim rounded-full
            `}
      >
        <RadixSwitch.Thumb
          className={`
                w-[12px] h-[12px] block bg-white rounded-full
                ${isYearly ? 'translate-x-[20px]	' : 'translate-x-0'} duration-300
              `}
        />
      </RadixSwitch.Root>

      <span className={`text-sm font-normal ${isYearly ? 'text-denim' : 'text-grey'} duration-100`}>
        Yearly
      </span>
    </Fragment>
  )
}