import React from 'react';
import ArticleContainer from '../Articles/articleContainer';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import {useAuth0} from '@auth0/auth0-react'
import css from './Wikipigeon.module.css'

const Wikipigeon = () => {
    const { isAuthenticated } = useAuth0();
    return (
      isAuthenticated && (
        <div>
          <Header title={"Wiki"} sub={"Pigeon"} />
  
          <main className={css.app}>
            <ArticleContainer />
          </main>
          <Footer/>
        </div>
      )
    );
};

export default Wikipigeon;
