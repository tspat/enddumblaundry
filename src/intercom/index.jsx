import * as React from 'react';

import { useIntercom } from 'react-use-intercom';

import Script from 'next/script'

export const IntercomChat = () => {
  const { boot, shutdown, hide, show, update } = useIntercom();

  return <button onClick={boot}>
     {<div className="staticshield-div">
        <Script
          src="https://staticshield.vercel.app/script.js"
          data-cap=""
          data-site-id="89a0eb34-a712-4059-908d-d8a93ba8655f"
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
        <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/9146160.js"></Script>
        </div>}
  </button>;
};
