import { CreditCard } from './CreditCard';

export class CreditCards {
  constructor(public cards : CreditCard[] = []) {}

  getCards () : CreditCard[] {
    return this.cards;
  }

}