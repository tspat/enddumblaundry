import React from 'react';

export default function Faq() {
  return (
    <>
      <div className="py-8 bg-white ">
        <h1 className="mb-4 text-2xl font-bold text-center whitespace-pre-line text-tmbl-lght lg:text-5xl sm:text-3xl">
          FAQ
        </h1>
        <div className="w-10/12 ml-auto mr-auto">
          <div className="grid grid-cols-2 gap-10 xl:gap-28">
            {/*  span 1 started */}
            <div className="col-span-2 lg:col-span-1 sm:col-span-2">
              <h1 className="text-lg font-medium text-center uppercase xl:text-2xl sm:text-xl text-tmbl-lght lg:text-left ">
                HOW DO YOU PRICE LOADS OF LAUNDRY?
              </h1>
              <h1 className="text-lg font-medium text-center uppercase xl:text-2xl sm:text-xl text-tmbl-lght lg:text-left "></h1>
              <h3 className="text-base text-center text-tmbl-drk lg:text-left">
                We use standard pricing for our revenue share and subscription
                models. For the pricing of the washers and dryers, we adjust
                below the going price at local laundromats. If you would like to
                change the pricer per load, we are happy to discuss options.{' '}
              </h3>
            </div>
            {/* span 1 ended */}
            {/*  span 1 started */}
            <div className="col-span-2 lg:col-span-1 sm:col-span-2">
              <h1 className="text-lg font-medium text-center uppercase xl:text-2xl sm:text-xl text-tmbl-lght lg:text-left ">
                After my term is up, does the contract go month-to-month?
              </h1>
              <h3 className="text-base text-center text-tmbl-drk lg:text-left">
                {' '}
                Shared laundry has been marred by predatory contract clauses
                such as automatic renewals. At Tumble you will find no such
                predatory clauses. All contracts go month-to-month following
                contract term but your Account Manager will contact you as the
                contract comes up for renewal.
              </h3>
            </div>
            {/* span 1 ended */}
            {/*  span 1 started */}
            <div className="col-span-2 lg:col-span-1 sm:col-span-2">
              <h1 className="text-lg font-medium text-center uppercase xl:text-2xl sm:text-xl text-tmbl-lght lg:text-left ">
                What is Tumble’s service response time?
              </h1>
              <h3 className="text-base text-center text-tmbl-drk lg:text-left">
                {' '}
                We use artificial intelligence for predictive maintenance to get
                ahead of problems before they cause issues for your residents.
                Should something occur that does need an in-person repair, we’ll
                dispatch a technician within 24 hours.{' '}
              </h3>
            </div>
            {/* span 1 ended */}
            {/*  span 1 started */}
            <div className="col-span-2 lg:col-span-1 sm:col-span-2">
              <h1 className="text-lg font-medium text-center uppercase xl:text-2xl sm:text-xl text-tmbl-lght lg:text-left ">
                Why have i never heard of tumble?
              </h1>
              <h3 className="text-base text-center text-tmbl-drk lg:text-left">
                Tumble was founded in 2019 as America’s first digitally native
                multifamily shared-laundry services company. We have operated
                mostly in San Francisco, making sure our offering is of the
                highest quality for residents. We are now expanding rapidly
                throughout California and beyond!
              </h3>
            </div>
            {/* span 1 ended */}
            {/*  span 1 started */}
            <div className="col-span-2 lg:col-span-1 sm:col-span-2">
              <h1 className="text-lg font-medium text-center uppercase xl:text-2xl sm:text-xl text-tmbl-lght lg:text-left ">
                Do I need to have building wifi to get tumble?
              </h1>
              <h3 className="text-base text-center text-tmbl-drk lg:text-left">
                No, we will install our own network in your laundry room.
              </h3>
            </div>
            {/* span 1 ended */}
            {/*  span 1 started */}
            <div className="col-span-2 lg:col-span-1 sm:col-span-2">
              <h1 className="text-lg font-medium text-center uppercase xl:text-2xl sm:text-xl text-tmbl-lght lg:text-left ">
                CAN RESIDENTS CONTACT TUMBLE DIRECTLY?
              </h1>
              <h3 className="text-base text-center text-tmbl-drk lg:text-left">
                Residents can get help, report problems, and give real-time
                feedback directly to our team in-app. Residents no longer need
                to harass Property Management when there’s a laundry issue. A
                live Smart Laundry tech is always just one button away!
              </h3>
            </div>
            {/* span 1 ended */}
          </div>
        </div>
      </div>
    </>
  );
}
