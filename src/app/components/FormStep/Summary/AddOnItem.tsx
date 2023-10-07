import { priceFormatter } from "../../../util/price-formatter";

interface AddOnItemProps {
  title: string;
  price: number;
  isYearly: boolean;
}

export function AddOnItem({ title, price, isYearly }: AddOnItemProps) {
  const formattedPrice = priceFormatter(price, isYearly)

  return (
    <div className="flex items-center justify-between">
      <strong className="text-sm leading-5 font-normal text-grey">
        {title}
      </strong>
      <span className="text-sm leading-5 font-normal text-denim">
        {`+${formattedPrice}`}
      </span>
    </div>
  )
} 