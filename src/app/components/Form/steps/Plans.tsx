import { useState } from "react";
import { FormButtons } from "../FormButtons";
import { FormCard } from "../FormCard";
import { FormHeader } from "../FormHeader";
import { PlanCard } from "../PlanCard";
import * as Switch from "@radix-ui/react-switch";
import { useFormStep } from "../../../hooks/use-form-step";

const plans = [
  {
    name: 'Arcade',
    price: {
      'monthly': '$9/mo',
      'yearly': '$90/yr'
    },
    icon: '/images/icons/icon-arcade.svg',
    freeTrialDescription: '2 months free',
  },
  {
    name: 'Advanced',
    price: {
      'monthly': '$12/mo',
      'yearly': '$120/yr'
    },
    icon: '/images/icons/icon-advanced.svg',
    freeTrialDescription: '2 months free',
  },
  {
    name: 'Pro',
    price: {
      'monthly': '$15/mo',
      'yearly': '$150/yr'
    },
    icon: '/images/icons/icon-pro.svg',
    freeTrialDescription: '2 months free',
  },
];

type TypeOfPlan = 'monthly' | 'yearly';

export function Plans() {
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('Arcade');

  const typeOfPlan: TypeOfPlan = isYearly ? 'yearly' : 'monthly';

  const { handleNextStep, handlePreviousStep } = useFormStep()

  function handleGoForwardStep() {
    if (!selectedPlan) return;

    handleNextStep()
  }

  function handleGoBack() {
    handlePreviousStep()
  }

  function handlePlanTypeChange() {
    setIsYearly(!isYearly);
  }

  return (
    <div className="flex flex-col flex-1 justify-between">
      <FormCard>
        <FormHeader title="Select your plan" description="You have the option of monthly or yearly billing." />
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          {plans.map(plan => (
            <PlanCard
              key={plan.name}
              name={plan.name}
              price={plan.price[typeOfPlan]}
              icon={plan.icon}
              isSelected={plan.name === selectedPlan}
              handleSelectPlan={() => setSelectedPlan(plan.name)}
              freeTrialDescription={plan.freeTrialDescription}
              isYearlyVersion={isYearly}
            />
          ))}
        </div>
        <div className="flex justify-center items-center gap-6 py-4 bg-very-light-grey mt-6 rounded-lg sm:mt-8">
          <span className={`text-sm font-normal ${isYearly ? 'text-grey' : 'text-denim'} duration-100`}>Monthly</span>
          <Switch.Root
            checked={isYearly}
            onCheckedChange={handlePlanTypeChange}
            className={`
              w-[40px] h-[20px] p-1 relative bg-denim rounded-full
            `}
          >
            <Switch.Thumb
              className={`
                w-[12px] h-[12px] block bg-white rounded-full
                ${isYearly ? 'translate-x-[20px]	' : 'translate-x-0'} duration-300
              `}
            />
          </Switch.Root>
          <span className={`text-sm font-normal ${isYearly ? 'text-denim' : 'text-grey'} duration-100`}>Yearly</span>
        </div>
      </FormCard>
      <FormButtons
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handleGoBack}
      />
    </div>
  )
}