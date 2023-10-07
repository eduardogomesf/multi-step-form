import { Fragment } from "react";

import { useForm } from "../../../hooks/use-form";
import { useFormStep } from "../../../hooks/use-form-step";
import { useLocalStorage } from "../../../hooks/use-local-storage";

import { AddOnOption } from "./AddOnOption";
import { Footer } from "../../Footer";
import Form from "../../Form";
import { AddonWithPrices, Addon } from "../../../types/add-ons";

import ADD_ONS from '../../../../data/add-ons.json'

export function AddOns() {

  const { addOns, setAddOns, isYearly } = useForm()

  const { handleNextStep, handlePreviousStep } = useFormStep()

  const { saveValueToLocalStorage } = useLocalStorage()

  function handleSelectAddon(addOn: AddonWithPrices) {
    const formattedAddOn = {
      title: addOn.title,
      description: addOn.description,
      price: addOn.price[isYearly ? 'yearly' : 'monthly']
    }
    setAddOns((currentAddons) => [...currentAddons, formattedAddOn])
  }

  function handleUnselectedAddon(addOn: Addon) {
    setAddOns((currentAddons) => currentAddons.filter(currentAddon => currentAddon.title !== addOn.title))
  }

  function handleGoForwardStep() {
    saveValueToLocalStorage('add-ons', JSON.stringify(addOns))
    handleNextStep()
  }

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Pick add-ons"
          description="Add-ons help enhance your gaming experience."
        />

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
      </Form.Card>
      <Footer
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  )
}