export interface Card {
  _id: string;
  name: string;
  show: boolean;
  requirements: string[];
  rating: string;
  properties: {_id?: number, propertie: string, type: string}[];
  specifics: {_id?: number, text: string, value: string}[];
  img: string;
  insurances: {_id?: number, text: string, type: string }[];
  bonustext: string;
  creditText: string;
  insuranceText: string;
  facts: {_id?: number, text: string, value: string}[];
  order: number;
  url: string;
  description : string;
}

export class CreditCard {
  constructor (public properties : Card) { }

  addToCompare () {

  }

  checkIfCardCompare () {
    
  }
}