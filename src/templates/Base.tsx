import React from 'react';

import { IntercomProvider } from 'react-use-intercom';

import { IntercomChat } from '../intercom';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
// import { Banner } from './Banner';
// import Faq from './Faq';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Header } from './Header'
import Script from "next/script"
// import { NMHC } from './NMHC';
// import Proposal from './Proposal';
// import Smartcenter from './Smartcenter';
// import Tumble from './Tumble';
import Washgallery from './Washgallery';

//const INTERCOM_APP_ID = 'bb5p5u7t';
import { AnalyticsBrowser } from '@segment/analytics-next'
import Waitlistmail from './waitlistmail';

export const analytics = AnalyticsBrowser.load({ writeKey: 'DxVayNrvlQ0oDpCGVGRKFvxWJWK2oCyz' })

const Base = () => (
  <IntercomProvider appId={'?'} autoBoot>
    <div className="antialiased text-gray-600">
      <IntercomChat />
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <Header />
      <Script >
      {`
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            // Insert Twitter Pixel ID and Standard Event data below
            twq('init','o7xbi');
            twq('track','PageView');
                `}
      </Script>
      <Script async defer src="//js.hs-scripts.com/9146160.js"></Script>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-HK6EEB64WX"></Script>
      <Script >
      {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HK6EEB64WX', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <Waitlistmail />
      <Washgallery />
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

export { Base };


