import React from 'react';

import { IntercomProvider } from 'react-use-intercom';

import { IntercomChat } from '../intercom';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
// import { Banner } from './Banner';
// import Faq from './Faq';
import { Footer } from './Footer';
// import { Hero } from './Hero';
// import { Header } from './Header'
// import { NMHC } from './NMHC';
import Waitlistmail from './waitlistmail'
// import Proposal from './Proposal';
// import Smartcenter from './Smartcenter';
// import Tumble from './Tumble';
// import Washgallery from './Washgallery';

//const INTERCOM_APP_ID = 'bb5p5u7t';

const WaitlistPG = () => (
  <IntercomProvider appId={'?'} autoBoot>
    <div className="antialiased text-gray-600">
      <IntercomChat />
      <Meta title={AppConfig.title} description={AppConfig.description} />
      {/* <Hero /> */}
      {/* <Header /> */}
      <Waitlistmail />
      {/* <Washgallery /> */}
      {/* <Smartcenter />
      <NMHC />
      <Faq />
      <Proposal />
      {/* <Tumble /> */}
      {/* <Banner /> */}
      <Footer />
    </div>
  </IntercomProvider>
);

export { WaitlistPG };
