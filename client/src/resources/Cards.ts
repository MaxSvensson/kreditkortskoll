import axios from '../config/axios';
import { Card as CreditCardInterface } from '../classes/CreditCard';
import { BestCard } from '../interfaces/BestCard';
import { CompareCards } from '../interfaces/CompareCards';


export const getBestCard = async () : Promise<{bestcard?: BestCard, error?: boolean}> => {
  try {
    // Fetch bestcard from server
    const res = await axios.get('/cards/bestcard');

    // if(!res.data.bestCard[0]) throw new Error();

    const bestcard = res.data.Bestcard[0] as BestCard

    // Return bestcard
    return {
      bestcard
    };    
  } catch (error) {
    return {
      error:true
    };
}
}

export const getCards = async () : Promise<{cards? : CreditCardInterface[], error? : boolean}> => {
  // Fetch cards from server
  try {
      const res = await axios.get('/cards');
      const cards = res.data.cards as CreditCardInterface[];    

      return {
        cards,
        error:false
      }
  } catch (error) {
    return {
      error:true
    }
  }
}

export const getCard = async (name : string) : Promise<{card? : CreditCardInterface, error? : boolean}> => {
  try {
    const res = await axios.get(`/cards/${name}`);
    const card = res.data.card as CreditCardInterface;

    return {
      card,
      error:false
    }
  } catch (error) {

    return {
      error: true
    }

  }
}


export const getCompareCards = async (ids : string[]) : Promise<{cards? : CompareCards[], error? : boolean}> => { 
  try {
    // Fetching cards
    const res = await axios.get(`/cards/compare?cards=${ids}`);
    let cards = res.data.information as CompareCards[];

    console.log(res.data)
    // Check for cards
    if(!cards) throw new Error();

    // Filter undefined cards
    cards = cards.filter(cardsInfo => cardsInfo !== null);

    // Return cards
    return {
      cards,
      error:false
    }
  } catch (error) {
    // Error, return
    return {
      error: true
    }

  }
}