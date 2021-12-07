/* eslint-disable prettier/prettier */
import React from 'react';

export default function Smartcenter() {
  return (
    <>
      <div className="py-8 bg-tmbl-third">
        <div className="w-10/12 ml-auto mr-auto">
          <h1 className="mb-4 text-2xl italic font-bold text-center uppercase whitespace-pre-line text-tmbl-lght lg:text-5xl sm:text-3xl lg:text-left ">
            the SMART CENTER
          </h1>
          <div className="grid grid-cols-2 gap-10 md:gap-20 xl:gap-28">
            {/*  span 1 started */}
            <div className="col-span-2 my-3 lg:col-span-1 sm:col-span-2">
              <img
                src="/assets/images/smartCenter.png"
                alt=""
                className="w-5/12 h-auto mt-10 ml-auto mr-auto lg:w-6/12 xl:mt-20"
              />
              <h3 className="mt-12 text-3xl font-medium text-center drop-shadow text-tmbl-drk lg:text-left ">We offer an optional stand-alone kiosk for shared laundry rooms that wish to provide a smart-phone alternative.</h3>
              <h3 className="mt-12 text-3xl font-medium text-center drop-shadow text-tmbl-drk lg:text-left ">
Our smart laundry machines can be controlled and paid for using the Smart Center.{' '}
              </h3>
            </div>
            {/*  span 1 ended */}
            {/*  span 1 started */}
            <div className="col-span-2 mb-5 lg:col-span-1 sm:col-span-2 lg:mt-3">
              <img
                src="/assets/images/washers.png"
                alt=""
                className="w-7/12 h-auto ml-auto mr-auto md:w-10/12"
              />
            </div>
            {/*  span 1 ended */}
          </div>
        </div>
      </div>
    </>
  );
}
