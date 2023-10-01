import { useForm } from "../../../hooks/use-form";
import { useFormStep } from "../../../hooks/use-form-step";
import { AddOnOption } from "../AddOnOption";
import { FormButtons } from "../FormButtons";
import { FormCard } from "../FormCard";
import { FormHeader } from "../FormHeader";

type Addon = {
  title: string;
  description: string;
  price: number
}

const ADD_ONS = [
  {
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: {
      monthly: 1,
      yearly: 10,
    }
  },
  {
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
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

  const { addOns, setAddOns } = useForm()

  const { handleNextStep, handlePreviousStep } = useFormStep()

  function handleSelectAddon(addOn: Addon) {
    setAddOns((currentAddons) => [...currentAddons, addOn])
  }

  function handleUnselectedAddon(addOn: Addon) {
    setAddOns((currentAddons) => currentAddons.filter(currentAddon => currentAddon.title !== addOn.title))
  }

  function handleGoForwardStep() {
    handleNextStep()
  }

  return (
    <div className="flex flex-col flex-1 justify-between">
      <FormCard>
        <FormHeader title="Pick add-ons" description="Add-ons help enhance your gaming experience." />
        <div className="mt-5 flex flex-col gap-3">
          {ADD_ONS.map((addOn, index) => (
            <AddOnOption
              key={index}
              addOn={addOn}
              isSelected={!!addOns.find(({ title }) => addOn.title === title)}
              handleSelectAddon={handleSelectAddon}
              handleUnselectedAddon={handleUnselectedAddon}
            />
          ))}
        </div>
      </FormCard>
      <FormButtons
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </div>
  )
}