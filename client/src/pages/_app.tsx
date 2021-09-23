import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';

// Components
// import NavigationButton from '../components/Ui/Navigation/NavigationButton/NavigationButton';
import CompareBox from '../components/Ui/CompareBox/CompareBox';
import Navbar from '../components/Ui/NavBar/Navbar';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css';
import { StateProvider } from '../context/State';




//Css
import '../global.css'
import Footer from '../components/Ui/Footer/Footer';

class MyApp extends App<any> {
  render () {
    NProgress.configure({ showSpinner: false });
    Router.events.on('routeChangeStart', () => NProgress.start());
    Router.events.on('routeChangeComplete', () => NProgress.done()); 
    Router.events.on('routeChangeError', () => NProgress.done());
    
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
          <Head>
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous" />
              <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
              <link rel="shortcut icon" href="/public/favicon.ico" />
          </Head>
          <StateProvider>
              <Navbar />
                <Component {...pageProps} key={Math.random() * 100} />
              <CompareBox />
              <Footer />
          </StateProvider>
      </React.Fragment>
    )
  }
}



export default MyApp