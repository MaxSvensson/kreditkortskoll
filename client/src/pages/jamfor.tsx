// import React from 'react';
// import { Card as CreditCardInterface } from '../classes/CreditCard';

import { GetServerSideProps } from "next";
import Head from "next/head"
import { getBestCard, getCompareCards } from "../resources/Cards";
import { CompareCards } from '../interfaces/CompareCards';
import Header from '../components/Compare/Header/Header';
import CompareTable from '../components/Compare/CompareTable/CompareTable';
import { BestCard } from "../interfaces/BestCard";


interface Props {
    cards : CompareCards[];
}


const Compare : React.FunctionComponent<Props> = ({cards}) : JSX.Element => {
    return <div>
      <Head>
        <meta key="5r42" charSet="UTF-8" />
        <title key="5r2">Kreditkortskoll.com | Jämför kreditkort</title>
      </Head>
      <main>
        <Header />
        <CompareTable cards={cards} /> 
      </main>
    </div>
  }
 
  export const getServerSideProps : GetServerSideProps = async (context) => {
    try {
  
      // Get ids from url
      const ids = context.query.cards as string[];

      console.log(ids)

      // Check if ids are true
      if(!ids || ids.length < 0 ) throw new Error();

      // Fetch card information
      let res = await getCompareCards(ids) as { error? : boolean , cards : CompareCards[] };
      const promises = [getCompareCards(ids), getBestCard()];
      const responses = await Promise.all(promises)


      const compareResponse = responses[0] as { error? : boolean , cards : CompareCards[] };
      const bestcardResponse = responses[1] as {bestcard?: BestCard, error?: boolean};
      // Check if cards are true
      if(!compareResponse.cards || compareResponse.error || !bestcardResponse.bestcard) throw new Error()

      // return cards
      return {
        props: {
          cards : res.cards,
          bestcard: bestcardResponse.bestcard
        }
      }
    } catch (e) {

    // Error, redirect to home page
      return {
        redirect: {
          destination : '/',
          permanent: false
        }
      }
    }
  }
  
export default Compare;