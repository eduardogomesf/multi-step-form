import { useFormStep } from "../../../hooks/use-form-step";
import { FormButtons } from "../FormButtons";
import { FormCard } from "../FormCard";
import { FormHeader } from "../FormHeader";

const addOns = [
  {
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: {
      monthly: 1,
      yearly: 10,
    }
  },
  {
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: {
      monthly: 2,
      yearly: 20,
    }
  },
  {
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: {
      monthly: 2,
      yearly: 20,
    }
  },
]

export function AddOns() {

  const { handleNextStep, handlePreviousStep } = useFormStep()

  return (
    <div className="flex flex-col flex-1 justify-between">
      <FormCard>
        <FormHeader title="Pick add-ons" description="Add-ons help enhance your gaming experience." />
      </FormCard>
      <FormButtons
        handleGoForwardStep={handleNextStep}
        handleGoBack={handlePreviousStep}
      />
    </div>
  )
}