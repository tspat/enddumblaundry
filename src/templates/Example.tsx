import React from 'react';
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

export default function Example() {
  return (
    <div className="py-2 md:py-8 bg-gray-50 overflow-hidden lg:py-2">
      <div className="mx-auto hidden md:block md:max-w-3xl lg:max-w-3xl" >
        <iframe src="https://player.vimeo.com/video/731572900?h=af1f828546&autoplay=1&title=0&byline=0&portrait=0&badge=0" width="770" height="600" allow="autoplay; fullscreen; picture-in-picture" ></iframe>
      </div>
      <div className="mx-auto md:hidden max-w-sm" >
        <iframe src="https://player.vimeo.com/video/731572900?h=af1f828546&title=0&byline=0&portrait=0&badge=0" width="380" height="375" allow="autoplay; fullscreen; picture-in-picture" ></iframe>
      </div>
    </div>
  )
}
