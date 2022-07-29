import React from 'react';

import { IntercomProvider } from 'react-use-intercom';

import { IntercomChat } from '../intercom';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
// import { Banner } from './Banner';
// import Faq from './Faq';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Header } from './Header';
import Script from "next/script";
// import { NMHC } from './NMHC';
// import Proposal from './Proposal';
// import Smartcenter from './Smartcenter';
// import Tumble from './Tumble';
import Washgallery from './Washgallery';

const INTERCOM_APP_ID = 'bb5p5u7t';
import { AnalyticsBrowser } from '@segment/analytics-next';
import Waitlistmail from './waitlistmail';
import Example from './Faq';

export const analytics = AnalyticsBrowser.load({ writeKey: 'DxVayNrvlQ0oDpCGVGRKFvxWJWK2oCyz' })

const Base = () => (
  <IntercomProvider appId={INTERCOM_APP_ID} autoBoot>
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
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
      <Script id="term-e7e5d07437489" src="https://wec-assets.terminus.services/f05aa748-85bd-48da-94c1-7a7301929bb3/t.js"></Script>
      <Script>{`<script type="text/javascript">
        _linkedin_partner_id = "1445460";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        </script><script type="text/javascript">
        (function(l) {
        if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
        window.lintrk.q=[]}
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);})(window.lintrk);
        </script>
        <noscript>
        <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=1445460&fmt=gif" />
        </noscript>`}</Script>
      <Script async defer src="//js.hs-scripts.com/9146160.js"></Script>
      <Script id="google-tag-manager" strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-HK6EEB64WX"></Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
      {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HK6EEB64WX', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <Hero />
      <Header />
      <IntercomChat />
      <Waitlistmail />
      <Example />
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


