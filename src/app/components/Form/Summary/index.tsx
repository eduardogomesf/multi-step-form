import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

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
      <div className="sm:my-auto">
        <FormCard>
          <div className="flex flex-col items-center">
            <Image src={'/images/icons/icon-thank-you.svg'} alt="Thank you icon" width={56} height={56} />
            <strong className="mt-6 text-2xl	text-denim font-bold" >Thank you!</strong>
            <p className="mt-2 text-base text-grey font-normal leading-6 tracking-[0.5px] text-center">
              Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@multistepform.com.
            </p>
          </div>
        </FormCard>
      </div>
    )
  }

  const addOnsTotalPrice = addOns.reduce((acc, addOn) => acc + addOn.price, 0)
  const finalPrice = selectedPlan.price + addOnsTotalPrice

  return (
    <Fragment>
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
    </Fragment>
  )
}