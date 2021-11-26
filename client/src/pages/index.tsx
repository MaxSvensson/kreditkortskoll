import React from 'react';
import { CreditCard } from '../classes/CreditCard'
import { Card as CreditCardInterface } from '../classes/CreditCard';
import Header from '../components/Index/Header/Header';
import WhyUs from '../components/Index/WhyUs/WhyUs';
import TopCards from '../components/Index/TopCards/TopCards';
import { BestCard } from '../interfaces/BestCard';
import { getBestCard, getCards } from '../resources/Cards'
import { CreditCards } from '../classes/CreditCards';
import UpdatedInformation from '../components/Index/UpdatedInforamtion/UpdatedInformation';
import Head from 'next/head';
import Categories from '../components/Ui/Categories/Categories';
import Test from '../components/Index/Test/Test';


interface State {
  cards : CreditCards;
}


interface Props {
    loading : boolean;
    compareIds : string[];
    cards: CreditCardInterface[];
    bestcard: BestCard;
}

class IndexPage extends React.Component<Props, State>  {
  render () {
    const cards = this.props.cards.map(card => new CreditCard(card));
    const list = new CreditCards(cards);
    const bestcard = this.props.bestcard
  return <div>
    <Head>
      <title>Alla kreditkort</title>
      <meta name="description" content="Kreditkortskoll.com jämför olika kreditkort för att hitta det bästa kredikortet för dig. Jämför kreditkort som Remember flex och Norwegian" />
      <meta name="robots" content="index, follow" />
    </Head>
      <Header bestcard={bestcard} />
      <main>
        <section>
          <WhyUs />
        </section>
        <section>
          <UpdatedInformation />
        </section>
        <section>
          <Test />
        </section>
        <section>
          <Categories />
        </section>
        <section>
          <TopCards creditCards={list} />
        </section>
      </main>
  </div>
  }
}


export async function getStaticProps() {

  try {
    const promises = [getCards(), getBestCard()];

    const responses = await Promise.all(promises)


    const cardsResponse = responses[0] as {cards?: CreditCardInterface[], error?: boolean};
    const bestcardResponse = responses[1] as {bestcard?: BestCard, error?: boolean};


    if(cardsResponse.error || bestcardResponse.error) throw new Error()

    return {
      props : {
        cards: cardsResponse.cards,
        bestcard: bestcardResponse.bestcard
      }
    }
  } catch (error) {
    return {
      props: {
        cards : [],
        bestcard: undefined
      },
      revalidate: 3600 * 4
    }
  }

}

export default IndexPage
