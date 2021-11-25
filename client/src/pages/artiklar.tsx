import React from 'react';
import Header from '../components/Blog/Header/Header';
import Head from 'next/head';
import Post from '../components/Blog/Post/Post';
import { Container, Row, Col } from 'react-grid-system';
import { getBlogs } from '../resources/Blog';
import { Blog } from '../interfaces/Blog';
import IntroSection from '../components/Blog/IntroSection/IntroSection';

interface Props {
   blogs: Blog[]
}

class IndexPage extends React.Component<Props>  {
  render () {
  return <div>
    <Head>
      <title>Kreditkortskoll.com | Artiklar</title>
      <meta name="description" content="Kreditkortskoll.com jämför olika kreditkort för att hitta det bästa kredikortet för dig. Jämför kreditkort som Remember flex och Norwegian" />
      <meta name="robots" content="index, follow" />
    </Head>
      <Header />
      <main>
        <Container>
          <IntroSection />
          <Row >
           {this.props.blogs.map(blog => {
           return <Col sm={12} md={6} lg={4}>
              <Post blog={blog} />
            </Col>
           })}
          </Row>
        </Container>
      </main>
      {/* <DisplayCards creditCards={this.state.cards} />  */}
  </div>
  }


}


export async function getStaticProps() {

  try {

    let responses = await getBlogs() as {blogs: Blog[], error: boolean};

    if(responses.error) throw new Error("No blogs found")

    return {
      props : {
        blogs: responses.blogs,
      },
      revalidate: 3600 * 4
    }
  } catch (error) {
    return {
      props: {
        blogs : [],
      },
      revalidate: 3600 * 4
    }
  }

}

export default IndexPage
