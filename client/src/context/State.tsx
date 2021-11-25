import React, {useState, createContext} from 'react';
import {Card as CreditCardInterface} from '../classes/CreditCard';

interface State {
  cards: CreditCardInterface[];
  compareIds: CreditCardInterface[]; 
}

export const StateContext = createContext({})

export const StateProvider : React.FC = ({children}) => {
  const [state, setState] = useState<State>({
    cards:[],
    compareIds:[]
  })
  return <StateContext.Provider value={[state, setState]}>
        {children}
  </StateContext.Provider>
}

