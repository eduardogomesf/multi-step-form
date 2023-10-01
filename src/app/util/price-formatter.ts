export function priceFormatter(price: number, isYearly: boolean): string {
  return isYearly ? `$${price}/yr` : `$${(price)}/mo`;
}