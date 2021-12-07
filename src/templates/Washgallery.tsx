import React from 'react';

export default function Washgallery() {
  return (
    <>
      <div className="py-8 bg-white">
        <div className="w-10/12 ml-auto mr-auto">
          <h1 className="mb-4 text-2xl italic font-bold text-center uppercase whitespace-pre-line text-tmbl-lght lg:text-5xl sm:text-3xl lg:text-left">
            SMART MACHINES
          </h1>
          <div className="grid grid-cols-4 gap-16">
            {/* 1 started */}
            <div className="col-span-4 lg:col-span-1 sm:col-span-2">
              <div className="text-center">
                <img
                  src="/assets/images/washer1.png"
                  alt=""
                  className="w-7/12 h-auto ml-auto mr-auto lg:w-full md:w-10/12"
                />
              </div>

              <h2 className="text-base font-medium text-tmbl-drk">
                Modified Speed Queen front load washer gives building owners and
                property managers unparalleled ability to reduce water and
                energy costs via advanced programmability, while also allowing
                for mobile control and predictive maintenance.
              </h2>
              <h2 className="mt-3 italic font-medium text-tmbl-drk">
                Machine Type: Front Load
              </h2>
              <h2 className="italic font-medium text-tmbl-drk">
                Load Size: 22 lb
              </h2>
              <h2 className="italic font-medium text-tmbl-drk">Mount: Soft</h2>
              <h2 className="italic font-medium text-tmbl-drk">Color: White</h2>
              <h2 className="italic font-medium text-tmbl-drk">
                Drain Type: Pump
              </h2>
            </div>
            {/* 1 ended */}
            {/* 1 started */}
            <div className="col-span-4 lg:col-span-1 sm:col-span-2">
              <div className="text-center">
                <img
                  src="/assets/images/washer2.png"
                  alt=""
                  className="w-7/12 h-auto ml-auto mr-auto lg:w-full md:w-10/12"
                />
              </div>
              <h2 className="text-base font-medium text-tmbl-drk">
                Speed Queen’s single load dryers combine heavy-duty construction
                with reliable operation proven to stand the test of time while
                also allowing for mobile control and predictive maintenance.
                They’re designed with less moving parts, so you’ll face fewer
                maintenance problems and less wear and tear down the road.
              </h2>
              <h2 className="mt-3 italic font-medium text-tmbl-drk">
                Machine Type: Dryer
              </h2>
              <h2 className="italic font-medium text-tmbl-drk">
                Load Size: 18 lb{' '}
              </h2>
              <h2 className="italic font-medium text-tmbl-drk"></h2>
              <h2 className="italic font-medium text-tmbl-drk">Color: White</h2>
              <h2 className="italic font-medium text-tmbl-drk">
                Heat: Electric 220/240V or gas
              </h2>
            </div>
            {/* 1 ended */}
            {/* 1 started */}
            <div className="col-span-4 lg:col-span-1 sm:col-span-2">
              <div className="text-center">
                <img
                  src="/assets/images/washer3.png"
                  alt=""
                  className="w-7/12 h-auto ml-auto mr-auto lg:w-full md:w-10/12"
                />
              </div>
              <h2 className="text-base font-medium text-tmbl-drk">
                Speed Queen’s stack washer/dryer takes up half the floor space
                that a conventional washer and dryer does when situated side by
                side. Both washer and dryer have the same hookups and
                connections as a standard washer and dryer, and support mobile
                control and predictive maintenance.
              </h2>
              <h2 className="mt-3 italic font-medium text-tmbl-drk">
                Machine Type: Stack Wash/Dryer
              </h2>
              <h2 className="italic font-medium text-tmbl-drk">
                Load Size: 22 lb
              </h2>
              <h2 className="italic font-medium text-tmbl-drk">Color: White</h2>
              <h2 className="italic font-medium text-tmbl-drk">
                Drain Type: Pump
              </h2>
              <h2 className="italic font-medium text-tmbl-drk">
                Heat: Electric 220/240V or gas
              </h2>
            </div>
            {/* 1 ended */}
            {/* 1 started */}
            <div className="col-span-4 lg:col-span-1 sm:col-span-2">
              <div className="text-center">
                <img
                  src="/assets/images/washer4.png"
                  alt=""
                  className="w-7/12 h-auto ml-auto mr-auto lg:w-full md:w-10/12"
                />
              </div>
              <h2 className="text-base font-medium text-tmbl-drk">
                The Speed Queen stack dryer offers the same great features as
                the single load dryer. Two commercial dryers in the space of
                one, both operating independently, including independent
                controls for optimum usage, while also allowing for mobile
                control and predictive
              </h2>
              <h2 className="mt-3 italic font-medium text-tmbl-drk">
                Machine Type: Stack Dryer
              </h2>
              <h2 className="italic font-medium text-tmbl-drk">
                Load Size: 18 lb
              </h2>
              <h2 className="italic font-medium text-tmbl-drk">Color: White</h2>
              <h2 className="italic font-medium text-tmbl-drk">
                Heat: Electric or gas
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
