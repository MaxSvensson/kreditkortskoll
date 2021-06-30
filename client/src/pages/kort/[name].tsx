import Header from "../../components/CreditCard/Header/Header";
import { CreditCard as Creditcard, Card as CreditCardInterface } from "../../classes/CreditCard";
import { GetStaticProps } from 'next'
import { getCard, getCards } from "../../resources/Cards";

// Components
import CardInformation from '../../components/CreditCard/CardInformation/CardInformation';
import Head from "next/head";
import { useRef } from "react";

interface Props {
  card : CreditCardInterface
}

const CreditCard : React.FunctionComponent<Props> = ({card}) => {

  const headerRef = useRef<HTMLDivElement>(null);

  // function isInViewport(el : HTMLDivElement) {
  //   const rect = el.getBoundingClientRect();
  //   console.log(rect)
  //   return (
  //       -(rect.top) >= window.innerHeight &&
  //       rect.left >= 0 &&
  //       rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  //   );
// }

// useEffect(() => {

//   document.addEventListener('scroll', function () {
//     if(headerRef.current) {
//       const headerVisble = isInViewport(headerRef.current)
//       console.log(headerVisble)
//     }

//   }, {
//       passive: true
//   });
// }, [])


  const creditCard = new Creditcard(card)
  return <div>
    <Head>
      <title>Kreditkortskoll.com | {card.name}</title>
    </Head>
    <Header ref={headerRef} creditCard={creditCard} />
    <CardInformation creditcard={creditCard} />
  </div>
}


export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await getCards()

  const cards = res.cards;

  if(!cards) throw new Error()

  // Get the paths we want to pre-render based on posts
  const paths = cards.map( card => ({
    params: { name: card._id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export const getStaticProps : GetStaticProps = async context => {

  try {
    if(!context.params) throw new Error();
    const name = context.params.name as string

    if(!name) throw new Error()
  
    const res = await getCard(name);

    if(res.error) throw new Error()

    return {
      props : {
        card: res.card
      },
      revalidate: 3600 * 4
    }
  } catch (error) {
    return {
      redirect : {
        destination: '/',
        permanent: false
      }
    }
  }

}

export default CreditCard;