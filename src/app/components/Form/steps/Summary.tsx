import { useFormStep } from "../../../hooks/use-form-step";
import { FormButtons } from "../FormButtons";
import { FormCard } from "../FormCard";
import { FormHeader } from "../FormHeader";

export function Summary() {

  const { handlePreviousStep } = useFormStep()

  function handleGoForwardStep() {
    console.log("Confirming...")
  }

  return (
    <div className="flex flex-col flex-1 justify-between">
      <FormCard>
        <FormHeader title="Finishing up" description="Double-check everything looks OK before confirming." />
        <div className="mt-5 flex flex-col gap-3 bg-very-light-grey rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 items-start">
              <strong className="text-sm font-medium text-denim sm:text-base">Arcade (Monthly)</strong>
              <button
                className="text-sm leading-5 font-normal text-grey underline cursor-pointer hover:text-purple duration-200"
              >
                Change
              </button>
            </div>
            <span className="text-sm leading-5 font-bold text-denim sm:text-base">$9/mo</span>
          </div>

          <div className="h-[1px] w-full bg-border-grey" />

          <div className="flex items-center justify-between">
            <strong className="text-sm leading-5 font-normal text-grey">Online service</strong>
            <span className="text-sm leading-5 font-normal text-denim">+$1/mo</span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between px-4">
          <strong className="text-sm leading-5 font-normal text-grey">Total (per month)</strong>
          <span className="text-base leading-5 font-bold text-purple sm:text-xl">+$12/mo</span>
        </div>
      </FormCard>
      <FormButtons
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </div>
  )
}