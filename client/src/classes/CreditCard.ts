export interface Card {
  id: string;
  name: string;
  show: boolean;
  requirments: string[];
  rating: number;
  properties: {text: string, type: string}[];
  specifics: string[];
  information: {key: string, value: string}[];
  img: string;
  insurances: {text: string, available: boolean }[];
  texts: { insuranceText: string, creditText: string, bonusText: string }
  order: number;
  url: string;
  description : string;
}

export class CreditCard {
  constructor (public properties : Card) { }

}