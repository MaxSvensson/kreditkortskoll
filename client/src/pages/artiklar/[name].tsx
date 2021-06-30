import React from 'react';
import Header from '../../components/Post/Header/Header';
import Head from 'next/head';
import { Container } from 'react-grid-system';
import { getBlog, getBlogs } from '../../resources/Blog';
import { Blog } from '../../interfaces/Blog';
import { GetStaticProps } from 'next';

interface Props {
   blog: Blog
}

class IndexPage extends React.Component<Props>  {

  createMarkup = () => {
    return { __html: this.props.blog.html };
  }

  render () {
  return <div>
    <Head>
      <title>Kreditkortskoll.com | {this.props.blog.name}</title>
      <meta name="description" content="Kreditkortskoll.com jämför olika kreditkort för att hitta det bästa kredikortet för dig. Jämför kreditkort som Remember flex och Norwegian" />
      <meta name="robots" content="index, follow" />
    </Head>
      <Header name={this.props.blog.name} description={this.props.blog.description} />
      <main>
        <Container>
            <div dangerouslySetInnerHTML={this.createMarkup()}></div>
        </Container>
      </main>
      {/* <DisplayCards creditCards={this.state.cards} />  */}
  </div>
  }


}


export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await getBlogs()

  const blogs = res.blogs;

  if(!blogs) throw new Error()

  // Get the paths we want to pre-render based on posts
  const paths = blogs.map( blog => ({
    params: { name: blog.name },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export const getStaticProps : GetStaticProps = async context => {

  try {
    if(!context.params) throw new Error()
    const name = context.params.name as string

    if(!name) throw new Error()
  
    const res = await getBlog(name);

    if(res.error) throw new Error()

    return {
      props : {
        blog: res.blog
      },
      revalidate: 3600 * 4
    }
  } catch (error) {
    return {
      redirect : {
        destination: '/artiklar',
        permanent: false
      }
    }
  }

}

export default IndexPage
