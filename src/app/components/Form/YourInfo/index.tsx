'use client';

import { Fragment } from "react";

import { useFormStep } from "../../../hooks/use-form-step";
import { useLocalStorage } from "../../../hooks/use-local-storage";
import { useForm } from "../../../hooks/use-form";
import { ACTIONS } from "../../../contexts/form";

import { FormHeader } from "../FormHeader";
import { TextInput } from "../TextInput";
import { FormCard } from "../FormCard";
import { Footer } from "../../Footer";

export function YourInfo() {
  const {
    nameField,
    dispatchNameField,
    emailField,
    dispatchEmailField,
    phoneNumberField,
    dispatchPhoneNumberField
  } = useForm()

  const { handleNextStep, handlePreviousStep } = useFormStep()

  const { saveValueToLocalStorage } = useLocalStorage()

  function validateForm() {
    let formHasError = false

    if (!nameField.value) {
      dispatchNameField({ type: ACTIONS.SET_ERROR, errorMessage: 'Name is required' })
      formHasError = true
    }

    if (!emailField.value) {
      dispatchEmailField({ type: ACTIONS.SET_ERROR, errorMessage: 'Email is required' })
      formHasError = true
    } else {
      const emailRegex = /\S+@\S+\.\S+/
      if (!emailRegex.test(emailField.value)) {
        dispatchEmailField({ type: ACTIONS.SET_ERROR, errorMessage: 'Email is invalid' })
        formHasError = true
      }
    }

    if (!phoneNumberField.value) {
      dispatchPhoneNumberField({ type: ACTIONS.SET_ERROR, errorMessage: 'Phone number is required' })
      formHasError = true
    } else {
      if (phoneNumberField.value.length < 6) {
        dispatchPhoneNumberField({ type: ACTIONS.SET_ERROR, errorMessage: 'Phone number is invalid' })
        formHasError = true
      }
    }

    return !formHasError
  }

  function handleGoForwardStep() {
    const isValid = validateForm()
    if (isValid) {
      saveValueToLocalStorage('your-info', JSON.stringify({
        name: nameField.value,
        email: emailField.value,
        phoneNumber: phoneNumberField.value
      }))
      handleNextStep()
    }
  }

  return (
    <Fragment>
      <FormCard>
        <FormHeader title="Personal Info" description="Please provide your name, email address, and phone number." />
        <div className="mt-5 flex flex-col gap-4">
          <TextInput
            label="Name"
            placeholder="e.g. Stephen King"
            value={nameField.value}
            onChange={(value: string) => dispatchNameField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={nameField.errorMessage}
            clearError={() => dispatchNameField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={nameField.hasError}
          />
          <TextInput
            label="Email Address"
            placeholder="e.g. stephenking@lorem.com"
            value={emailField.value}
            onChange={(value: string) => dispatchEmailField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={emailField.errorMessage}
            clearError={() => dispatchEmailField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={emailField.hasError}
          />
          <TextInput
            label="Phone Number"
            placeholder="e.g. +1 234 567 890"
            value={phoneNumberField.value}
            onChange={(value: string) => dispatchPhoneNumberField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={phoneNumberField.errorMessage}
            clearError={() => dispatchPhoneNumberField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={phoneNumberField.hasError}
          />
        </div>
      </FormCard>
      <Footer
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  )
} 