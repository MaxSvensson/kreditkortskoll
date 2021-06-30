import { useState } from 'react';
import { Container } from 'react-grid-system';
import Accordion from '../Accordion/Accordion';
import styles from './Content.module.css';
import Image from 'next/image'

const Content : React.FC = () => {
  const faqs = [2, 3, 5, 423, 3542, 42, 5325, 54, 5312, 431];
  const [open, setOpen] = useState<number>()
  

  const onClick = (id : number) => {
    if(id === open) return setOpen(0)
    setOpen(id)
  }

  return <div id={styles.Content}>
    <Container>
      <div id={styles.list}>
        {faqs.map(id => {
          return <Accordion onClick={onClick} id={id} open={id === open ? true : false} />     
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