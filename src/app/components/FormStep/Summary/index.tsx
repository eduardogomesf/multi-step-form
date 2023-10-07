import { Fragment, useEffect, useState } from "react";

import { useForm } from "../../../hooks/use-form";
import { useFormStep } from "../../../hooks/use-form-step";
import { priceFormatter } from "../../../util/price-formatter";

import { Footer } from "../../Footer";
import Form from "../../Form";
import { PostConfirmation } from "./PostConfirmation";
import { TotalPrice } from "./TotalPrice";
import { AddOnItem } from "./AddOnItem";

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
      <PostConfirmation />
    )
  }

  const addOnsTotalPrice = addOns.reduce((acc, addOn) => acc + addOn.price, 0)
  const finalPrice = selectedPlan.price + addOnsTotalPrice

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Finishing up"
          description="Double-check everything looks OK before confirming."
        />

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

          {addOns.length > 0 && (
            <div className="h-px w-full bg-border-grey" />
          )}

          {addOns.map((addOn, index) => (
            <AddOnItem
              key={index}
              title={addOn.title}
              price={addOn.price}
              isYearly={isYearly}
            />
          ))}
        </div>

        <TotalPrice
          finalPrice={finalPrice}
          isYearly={isYearly}
        />
      </Form.Card>
      <Footer
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  )
}