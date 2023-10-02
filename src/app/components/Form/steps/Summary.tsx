import { useEffect, useState } from "react";
import { useForm } from "../../../hooks/use-form";
import { useFormStep } from "../../../hooks/use-form-step";
import { priceFormatter } from "../../../util/price-formatter";
import { FormButtons } from "../FormButtons";
import { FormCard } from "../FormCard";
import { FormHeader } from "../FormHeader";

export function Summary() {
  const [submitted, setSubmitted] = useState(false)

  const { handlePreviousStep, moveToStep } = useFormStep()

  const { addOns, selectedPlan, isYearly, clearForm } = useForm()

  function handleGoForwardStep() {
    setSubmitted(true)
  }

  function handleChangePlan() {
    moveToStep(2)
  }

  useEffect(() => {
    if (submitted) {
      clearForm()

      setTimeout(() => {
        moveToStep(1)
      }, 4000)
    }
  }, [submitted, moveToStep])

  if (submitted) {
    return (
      <div>Finished...</div>
    )
  }

  const addOnsTotalPrice = addOns.reduce((acc, addOn) => acc + addOn.price, 0)
  const finalPrice = selectedPlan.price + addOnsTotalPrice

  return (
    <div className="flex flex-col flex-1 justify-between">
      <FormCard>
        <FormHeader title="Finishing up" description="Double-check everything looks OK before confirming." />
        <div className="mt-5 flex flex-col gap-3 bg-very-light-grey rounded-lg p-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 items-start">
              <strong className="text-sm font-medium text-denim sm:text-base">
                {`${selectedPlan.name} (${isYearly ? 'Yearly' : 'Monthly'})`}
              </strong>
              <button
                className="text-sm leading-5 font-normal text-grey underline cursor-pointer hover:text-purple duration-200"
                onClick={handleChangePlan}
              >
                Change
              </button>
            </div>
            <span className="text-sm leading-5 font-bold text-denim sm:text-base">
              {priceFormatter(selectedPlan.price, isYearly)}
            </span>
          </div>

          {addOns.length > 0 && <div className="h-[1px] w-full bg-border-grey" />}

          {addOns.map((addOn, index) => (
            <div key={index} className="flex items-center justify-between">
              <strong className="text-sm leading-5 font-normal text-grey">
                {addOn.title}
              </strong>
              <span className="text-sm leading-5 font-normal text-denim">
                +{priceFormatter(addOn.price, isYearly)}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between px-4 sm:px-6">
          <strong className="text-sm leading-5 font-normal text-grey">
            {`Total (${isYearly ? 'per year' : 'per month'})`}
          </strong>
          <span className="text-base leading-5 font-bold text-purple sm:text-xl">
            {priceFormatter(finalPrice, isYearly)}
          </span>
        </div>
      </FormCard>
      <FormButtons
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </div>
  )
}