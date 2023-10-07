export type TypeOfPlan = 'monthly' | 'yearly';

export type PlanWithPrices = {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  }
}