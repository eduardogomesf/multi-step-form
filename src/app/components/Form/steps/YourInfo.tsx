'use client';

import { useState } from "react";
import { FormHeader } from "../FormHeader";
import { TextInput } from "../TextInput";
import { FormCard } from "../FormCard";
import { Footer } from "../../Footer";

export function YourInfo() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  return (
    <div className="flex flex-col flex-1 justify-between">
      <FormCard>
        <FormHeader title="Personal Info" description="Please provide your name, email address, and phone number." />
        <div className="mt-5 flex flex-col gap-4">
          <TextInput
            label="Name"
            placeholder="e.g. Stephen King"
            value={name}
            onChange={setName}
            errorMessage="The provided name is invalid"
          />
          <TextInput
            label="Email Address"
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            onChange={setEmail}
            errorMessage="E-mail is invalid"
          />
          <TextInput
            label="Phone Number"
            placeholder="e.g. +1 234 567 890"
            value={phoneNumber}
            onChange={setPhoneNumber}
            errorMessage="Phone number is invalid"
          />
        </div>
      </FormCard>
      <Footer />
    </div>
  )
} 