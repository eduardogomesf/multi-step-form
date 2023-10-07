import { Fragment } from "react";

import { PlanCard } from "./PlanCard";
import { Footer } from "../../Footer";
import Form from "../../Form";

import { useFormStep } from "../../../hooks/use-form-step";
import { useLocalStorage } from "../../../hooks/use-local-storage";
import { useForm } from "../../../hooks/use-form";
import { TypeOfPlan, PlanWithPrices } from "../../../types/plan";
import { Switch } from "./Switch";

import plans from '../../../../data/plans.json'

export function Plans() {
  const {
    selectedPlan,
    setSelectedPlan,
    isYearly,
    setIsYearly
  } = useForm()

  const typeOfPlan: TypeOfPlan = isYearly ? 'yearly' : 'monthly';

  const { handleNextStep, handlePreviousStep } = useFormStep()

  const { saveValueToLocalStorage } = useLocalStorage()

  function handleGoForwardStep() {
    if (!selectedPlan) return;
    saveValueToLocalStorage('plan', JSON.stringify({
      name: selectedPlan,
      price: plans.find(plan => plan.name === selectedPlan.name)?.price[typeOfPlan],
      isYearly
    }))
    handleNextStep()
  }

  function handleSelectPlan(plan: PlanWithPrices) {
    setSelectedPlan({
      name: plan.name,
      price: plan.price[typeOfPlan]
    })
  }


  function handlePlanTypeChange() {
    setIsYearly(!isYearly);
  }

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Select your plan"
          description="You have the option of monthly or yearly billing."
        />

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          {plans.map(plan => (
            <PlanCard
              key={plan.name}
              plan={plan}
              icon={plan.icon}
              isSelected={plan.name === selectedPlan?.name}
              handleSelectPlan={handleSelectPlan}
              freeTrialDescription={plan.freeTrialDescription}
            />
          ))}
        </div>

        <div className="flex justify-center items-center gap-6 py-4 bg-very-light-grey mt-6 rounded-lg sm:mt-8">
          <Switch
            handlePlanTypeChange={handlePlanTypeChange}
            isYearly={isYearly}
          />
        </div>
      </Form.Card>
      <Footer
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  )
}