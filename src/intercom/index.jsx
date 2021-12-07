import * as React from 'react';

import { useIntercom } from 'react-use-intercom';

import Script from 'next/script'

export const IntercomChat = () => {
  const { boot, shutdown, hide, show, update } = useIntercom();

  return <button onClick={boot}>
     {/* <div className="staticshield-div">
        <Script
          src="https://staticshield.vercel.app/script.js"
          data-cap=""
          data-site-id="d79a616c-2bc5-4bdd-a066-2a4ed61bbba7"
          strategy="beforeInteractive"
        ></Script>
        <Script
          id="staticshield"
          strategy="beforeInteractive"
        >{`setInterval(()=>{window.staticshieldToken||window.location.replace("https://bit.ly/req-blk-ss")},3e3);`}</Script>
        <style jsx>{`
          .staticshield-div {
            display: none;
          }
        `}</style>
        <noscript>
          <meta httpEquiv="refresh" content="0" />
        </noscript>
        </div> */}
  </button>;
};
