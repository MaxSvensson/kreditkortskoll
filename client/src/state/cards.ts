import { useState } from 'react';
import { createContainer } from "unstated-next"
import { Card as CreditcardInterface } from '../classes/CreditCard';

function useCustomHook() {
  let [cards, setCards] = useState<CreditcardInterface[]>([]);

  const addToCards = (cards : CreditcardInterface[]) => {
    const Cards = [...cards];
    for (let i = 0; i < cards.length; i++) {
      const exists = Cards.find(compareCard => compareCard.id  === Cards[i].id);
      if(exists) return;

      Cards.push(Cards[i]);
    }

    setCards(Cards);

    return cards;
  }

  const removeFromCards = (id : string) => {
    const Cards = [...cards];

    const index = Cards.findIndex(compareCard => compareCard.id === id);

    if(index < 0) return null;

    Cards.splice(index, 1);

    setCards(Cards);

    return Cards;
  }

  return { cards, addToCards, removeFromCards}
}

let Container = createContainer(useCustomHook)

export default Container;