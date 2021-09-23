import React, { useEffect } from 'react';
import { GetServerSideProps } from "next";
import { Card as CreditCardInterface } from '../classes/CreditCard';

// Components
import RedirectBox from '../components/Redirect/RedirectBox/RedirectBox';
import { getCard } from '../resources/Cards';
import Background from '../components/Redirect/Background/Background';

interface Props {
  card: CreditCardInterface;
}

const Redirect : React.FunctionComponent<Props> = ({card}) => {

  useEffect(() => {
      setTimeout(() => {
        // window.location.replace(card.url);
      }, 1000 )
  }, [])

  return <div>
      <Background />
      <RedirectBox card={card} />
  </div>
}

export const getServerSideProps : GetServerSideProps = async (context) => {

  try {
    const cardId = context.query.card as string;
    if(!cardId) throw new Error()

    const res = await getCard(cardId)
    if(res.error || !res.card) throw new Error()

    return {
      props : {
        card : res.card
      }
    }
  } catch (error) {
     // Error, redirect to home page
     return {
      redirect: {
        destination : '/',
        permanent: false
      }
    } 
  }
}

export default Redirect