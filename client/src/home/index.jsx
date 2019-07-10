import React, { Fragment } from 'react';
import scss from './index.module.scss';
import Dock from './subpage/Dock';
import AppBlock from './subpage/AppBlock';
import Desktop from './subpage/Desktop';

const Home = (props) => {
  return (
    <Fragment>
      <Dock/>
      <Desktop/>
      <AppBlock />
    </Fragment>
  );
}

export default Home;