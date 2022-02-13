import React from 'react';

import { IntercomProvider } from 'react-use-intercom';

import { IntercomChat } from '../intercom';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import Faq from './Faq';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { NMHC } from './NMHC';
import MobileGallery from './MobileGallery';
import Proposal from './Proposal';
import Smartcenter from './Smartcenter';
// import Tumble from './Tumble';
import Washgallery from './Washgallery';

const INTERCOM_APP_ID = 'bb5p5u7t';

const Base = () => (
  <IntercomProvider appId={INTERCOM_APP_ID} autoBoot>
    <div className="antialiased text-gray-600">
      <IntercomChat />
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <MobileGallery />
      <Washgallery />
      <Smartcenter />
      <NMHC />
      <Faq />
      <Proposal />
      {/* <Tumble /> */}
      <Banner />
      <Footer />
    </div>
  </IntercomProvider>
);

export { Base };
