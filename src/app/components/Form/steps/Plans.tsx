import { useState } from "react";
import { FormButtons } from "../FormButtons";
import { FormCard } from "../FormCard";
import { FormHeader } from "../FormHeader";
import { PlanCard } from "../PlanCard";

type TypeOfPlan = 'monthly' | 'yearly';

export function Plans() {
  const [typeOfPlan, setTypeOfPlan] = useState<TypeOfPlan>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string>('Arcade');
  const [plans, setPlans] = useState([
    {
      name: 'Arcade',
      price: {
        'monthly': '$9/mo',
        'yearly': '$90/yr'
      },
      icon: '/images/icons/icon-arcade.svg'
    },
    {
      name: 'Advanced',
      price: {
        'monthly': '$12/mo',
        'yearly': '$120/yr'
      },
      icon: '/images/icons/icon-advanced.svg'
    },
    {
      name: 'Pro',
      price: {
        'monthly': '$15/mo',
        'yearly': '$150/yr'
      },
      icon: '/images/icons/icon-pro.svg'
    },
  ]);

  function handleGoForwardStep() {}

  function handleGoBack() {}

  return (
    <div className="flex flex-col flex-1 justify-between">
      <FormCard>
        <FormHeader title="Select your plan" description="You have the option of monthly or yearly billing." />
        <div className="mt-5 flex flex-col gap-3">
          {plans.map(plan => (
            <PlanCard
              key={plan.name}
              name={plan.name}
              price={plan.price[typeOfPlan]}
              icon={plan.icon}
              isSelected={plan.name === selectedPlan}
              handleSelectPlan={() => setSelectedPlan(plan.name)}
            />
          ))}
        </div>
      </FormCard>
      <FormButtons
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handleGoBack}
      />
    </div>
  )
}