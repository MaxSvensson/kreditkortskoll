import { useState } from 'react';
import { Container } from 'react-grid-system';
import Accordion from '../Accordion/Accordion';
import styles from './Content.module.css';
import Image from 'next/image'

const Content : React.FC = () => {
  const faqs = [
    {
      category: "Räntor",
      faqs: [{
        id: 1, 
        title: 'Vilka förmåner och bonusar ger ett kreditkort?',
        answer: `Alla kort erbjuder olika förmåner och bonusar beroende på utgivaren.
    
        Det varierar mellan extra försäkringar, bonuspoäng, rabbatter och cashback. Vissa kort kan till och med ge dig både bonuspoäng och flera kostnadsfria extraförsäkringar.
        
        Använd tjänsten Jämför Kreditkort för att se alla olika kort.`
      }, {
        id: 2, 
        title: 'How often do you go to the beach',
        answer: 'Answer'
      }, {
        id: 3, 
        title: 'How often do you go to the beach',
        answer: 'Answer'
      }]
    },
    {
      category: "Bonusar",
      faqs: [{
        id: 4, 
        title: 'Vilka förmåner och bonusar ger ett kreditkort?',
        answer: `Alla kort erbjuder olika förmåner och bonusar beroende på utgivaren.
    
        Det varierar mellan extra försäkringar, bonuspoäng, rabbatter och cashback. Vissa kort kan till och med ge dig både bonuspoäng och flera kostnadsfria extraförsäkringar.
        
        Använd tjänsten Jämför Kreditkort för att se alla olika kort.`
      }, {
        id: 5, 
        title: 'How often do you go to the beach',
        answer: 'Answer'
      }, {
        id: 6, 
        title: 'How often do you go to the beach',
        answer: 'Answer'
      }, {
        id: 7, 
        title: 'How often do you go to the beach',
        answer: 'Answer'
      }, {
        id: 8, 
        title: 'How often do you go to the beach',
        answer: 'Answer'
      }]
    },
    {
      category: "Försäkringar",
      faqs: [{
        id: 9, 
        title: 'Vilka förmåner och bonusar ger ett kreditkort?',
        answer: `Alla kort erbjuder olika förmåner och bonusar beroende på utgivaren.
    
        Det varierar mellan extra försäkringar, bonuspoäng, rabbatter och cashback. Vissa kort kan till och med ge dig både bonuspoäng och flera kostnadsfria extraförsäkringar.
        
        Använd tjänsten Jämför Kreditkort för att se alla olika kort.`
      }, {
        id: 10, 
        title: 'How often do you go to the beach',
        answer: 'Answer'
      }, {
        id: 3, 
        title: 'How often do you go to the beach',
        answer: 'Answer'
      }]
    },
  ];
  const [open, setOpen] = useState<number>()

  const onClick = (id : number) => {
    if(id === open) return setOpen(0)
    setOpen(id)
  }
  return <div id={styles.Content}>
    <Container>
      <div id={styles.text}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nam veritatis molestiae repellat maiores atque numquam, iste illo eveniet, animi placeat, modi sequi. Nobis quis quidem temporibus facere. Fugiat, hic. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloribus, ipsa nam fuga ut officiis ad, nulla animi ex aspernatur veritatis velit ratione? Quas ducimus quae rem iste est odio.</p>
      </div>
      <div id={styles.list}>
        {faqs.map(faq => {
          return <div className={styles.category}>
            <p className={styles.title}>{faq.category}</p>
            {faq.faqs.map(faq => {
              return <Accordion onClick={onClick} faq={faq} open={faq.id === open ? true : false} /> 
            })}
          </div>  
        })}
      </div>
    </Container>
      <div id={styles.imgContainer}>
        <Image
          width={500}
          height={700}
          src="/images/faq.svg"
          id={styles.Img}
        />
      </div>
  </div>
}

export default Content