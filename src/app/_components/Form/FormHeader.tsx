interface FormHeaderProps {
  title: string
  description: string
}

export function FormHeader({ title, description }: FormHeaderProps) {
  return (
    <header className="flex flex-col gap-2 sm:gap-3">
      <h1 className="text-denim font-bold text-2xl sm:text-3xl">{title}</h1>
      <h1 className="text-grey font-normal text-base ">{description}</h1>
    </header>
  )
} 