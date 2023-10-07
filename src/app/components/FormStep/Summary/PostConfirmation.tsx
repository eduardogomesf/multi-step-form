import Form from "../../Form";
import Image from 'next/image'

export function PostConfirmation() {
  return (
    <div className="sm:my-auto">
      <Form.Card>
        <div className="flex flex-col items-center">
          <Image
            src={'/images/icons/icon-thank-you.svg'}
            alt="Thank you icon"
            width={56}
            height={56}
          />

          <strong className="mt-6 text-2xl	text-denim font-bold">
            Thank you!
          </strong>

          <p className="mt-2 text-base text-grey font-normal leading-6 tracking-[0.5px] text-center">
            Thanks for confirming your subscription! We hope you have fun using our platform.
            If you ever need support, please feel free to email us at support@multistepform.com.
          </p>
        </div>
      </Form.Card>
    </div>
  )
}