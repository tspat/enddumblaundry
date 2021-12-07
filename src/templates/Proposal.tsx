/* eslint-disable prettier/prettier */
import React from 'react';

export default function Proposal() {
  return (
    <>
      <div className="py-8 bg-white ">
        <h1 className="mb-4 text-2xl font-bold text-center whitespace-pre-line text-tmbl-lght lg:text-5xl sm:text-3xl">
          PROPOSAL
        </h1>
        <div className="w-10/12 ml-auto mr-auto">
          <h2 className="text-lg text-center text-tmbl-drk xl:text-4xl sm:text-2xl lg:text-left">
            {' '}
           
          </h2>
          <div className="grid grid-cols-4 gap-16 my-10 ">
            {/* 1 span started */}
            <div className="col-span-4 lg:col-span-3">
              <h1 className="text-2xl font-medium text-center uppercase xl:text-4xl sm:text-4xl text-tmbl-lght lg:text-left">
                SERVICE PROVIDED
              </h1>
              <h3 className="text-2xl text-center text-tmbl-drk xl:text-2xl sm:text-xl lg:text-left ">
              Laundry equipment and service provided through exclusive possession of all common laundry room(s) located on the real property and improvements of the units located at <b>10424 Down Patrick Ln, Great Falls, VA 22066.</b> For this property we propose <b>1 ADA Front Load Washer and 1 ADA Front Load Electric Dryer</b> utilizing Tumble’s proprietary connected system. These machines utilize cashless payment systems except for those machines negotiated with the owner to be coin-driven.
              </h3>
            </div>
            {/* 1 span ended */}
            {/* 1 span started */}
            <div className="col-span-4 lg:col-span-1">
              <img
                src="/assets/images/washer1.png"
                alt=""
                className="w-6/12 h-auto ml-auto mr-auto lg:w-full xl:mt-14 lg:mt-5"
              />
            </div>
            {/* 1 span ended */}
          </div>
          <h1 className="text-2xl font-medium text-center xl:text-5xl sm:text-4xl text-tmbl-lght lg:text-left">
            TERM OPTIONS{' '}
            {/* <span className="text-lg text-center text-tmbl-drk xl:text-4xl sm:text-xl lg:text-left ">
              Options{' '}
            </span>{' '} */}
          </h1>
          <div className="grid grid-cols-6 gap-24 my-8 justify-items-center">
            {/* 1 span started */}
            <div className="col-span-4 lg:col-span-2 sm:col-span-3">
              <div className="p-5 bg-tmbl-drk rounded-2xl ">
                <h4 className="text-lg text-center text-white uppercase xl:text-4xl sm:text-xl ">
                  Monthly TERM
                </h4>
                <ul className="text-sm text-center text-white ">
                  <li>70% of revenue to Tumble</li>
                  30% of revenue to Owner
                </ul>
              </div>
            </div>
            {/* 1 span ended */}
            {/* 1 span started */}
            <div className="col-span-4 lg:col-span-2 sm:col-span-3">
              <div className="p-5 bg-tmbl-drk rounded-2xl ">
                <h4 className="text-lg text-center text-white uppercase xl:text-4xl sm:text-xl ">
                  1 year term
                </h4>
                <ul className="text-sm text-center text-white ">
                  <li>60% of revenue to Tumble</li> 
                  40% of revenue to Owner
                </ul>
              </div>
            </div>
            {/* 1 span ended */}
            {/* 1 span started */}
            <div className="col-span-4 lg:col-span-2 sm:col-span-3">
              <div className="p-5 bg-tmbl-drk rounded-2xl ">
                <h4 className="text-lg text-center text-white uppercase xl:text-4xl sm:text-xl ">
                  5 year term
                </h4>
                <ul className="text-sm text-center text-white ">
                  <li>50% of revenue to Tumble</li> 
                  50% of revenue to Owner
                </ul>
              </div>
            </div>
            {/* 1 span ended */}
          </div>
          {/* text div started */}
          <div className="my-16">
            <h1 className="text-2xl font-medium text-center uppercase xl:text-4xl sm:text-4xl text-tmbl-lght lg:text-left">
              EARLY CANCELLATION
            </h1>
            <h3 className="text-lg text-center text-tmbl-drk xl:text-2xl sm:text-xl lg:text-left ">
            The Owner may choose to cancel the Agreement early or before the ending of the above stated Term provided that, we will not provide any refunds, and the Owner will promptly pay a negotiated early termination fee that will be no less than 50% of the average trailing monthly revenues since the beginning of the Term multiplied by the remaining months of the term.
            </h3>
          </div>
          {/* text div ended */}
          {/* text div started */}
          <div className="my-16">
            <h1 className="text-2xl font-medium text-center uppercase xl:text-4xl sm:text-4xl text-tmbl-lght lg:text-left">
              Termination for Cause
            </h1>
            <h3 className="text-lg text-center text-tmbl-drk xl:text-2xl sm:text-xl lg:text-left ">
              Either party may terminate this Agreement for cause, as to any or
              all of agreed Services: (i) upon thirty (30) days written notice
              to the other party of a material breach if such breach remains
              uncured at the expiration of such period or (ii) Operator fails to
              perform satisfactory service then this Agreement may be terminated
              by either party with thirty (30) days written notice to the other
              party.
            </h3>
            <h3 className="mt-4 text-lg text-center text-tmbl-drk xl:text-2xl sm:text-xl lg:text-left ">
              The Operator may also terminate this Agreement for cause on thirty
              (30) days written notice if the Operator determines that the Owner
              is acting, or has acted, in a way that has or may negatively
              reflect on or affect the Operator, the Operator’s prospects, or
              the Operator’s customers.
            </h3>
            <h3 className="mt-4 text-lg text-center text-tmbl-drk xl:text-2xl sm:text-xl lg:text-left ">
              The Agreement may not otherwise be terminated prior to the end of
              the Term.
            </h3>
          </div>
          {/* text div ended */}
          {/* text div started */}
          <div className="my-16">
            <h1 className="text-2xl font-medium text-center uppercase xl:text-4xl sm:text-4xl text-tmbl-lght lg:text-left">
              SERVICE CHARGES
            </h1>
            <h3 className="text-lg text-center text-tmbl-drk xl:text-2xl sm:text-xl lg:text-left ">
              Tumble provides an end-to-end service for providing laundry
              amenities to residents. As such, rent will be a percentage as
              negotiated with the term (as stated above) of collected revenue
              from all machines paid monthly and no later than the 15th of the
              following month from Tumble to the property management or building
              owner.{' '}
            </h3>
            <h3 className="mt-4 text-lg text-center text-tmbl-drk xl:text-2xl sm:text-xl lg:text-left ">
              Tumble has determined the average turns per day (TPD) of common
              laundry rooms to be 2 TPD per machine. <b>The proposed price per wash
              is $20,075. The proposed price per dry is $20,000.</b> These prices are
              subject to change, and Tumble will reserve the right to change
              prices as appropriate.{' '}
            </h3>
            <h3 className="mt-4 text-lg text-center text-tmbl-drk xl:text-2xl sm:text-xl lg:text-left ">
            The property management and/or building owner will be provided a statement of usage on the 1st of every month for the previous month’s usage, and paid no later than the 15th of the same month for the balance of that statement.
            </h3>
          </div>
          {/* text div ended */}
          {/* text div started */}
          <div className="my-16">
            <h1 className="text-2xl font-medium text-center uppercase xl:text-4xl sm:text-4xl text-tmbl-lght lg:text-left">
              For contract comparison
            </h1>
            <h3 className="text-lg text-center text-tmbl-drk xl:text-2xl sm:text-xl lg:text-left ">
              Tumble does not charge extra service fees, technology fees,
              collection fees, machine per day minimums, or any other
              fees/charges. The revenue share stated above is exactly what the
              property management or building owner will receive.{' '}
            </h3>
          </div>
          {/* text div ended */}
          {/* text div started */}
          <div className="my-16">
            <h1 className="text-2xl font-medium text-center uppercase xl:text-4xl sm:text-4xl text-tmbl-lght lg:text-left">
              METHOD OF PAYMENT
            </h1>
            <h3 className="text-lg text-center text-tmbl-drk xl:text-2xl sm:text-xl lg:text-left ">
              Tumble will provide payment of all balances via check or direct
              deposit to the directed account of the property manager and/or
              building owner.
            </h3>
          </div>
          {/* text div ended */}
          {/* text div started */}
          <div className="my-16">
            <h1 className="text-2xl font-medium text-center uppercase xl:text-4xl sm:text-4xl text-tmbl-lght lg:text-left">
              INSTALLATION
            </h1>
            <h3 className="text-lg text-center text-tmbl-drk xl:text-2xl sm:text-xl lg:text-left ">
              Tumble will cover all costs associated with installation and
              delivery of above stated laundry equipment.
            </h3>
          </div>
          {/* text div ended */}
          {/* text div started */}
          <div className="my-16">
            <h1 className="text-2xl font-medium text-center uppercase xl:text-4xl sm:text-4xl text-tmbl-lght lg:text-left">
              Maintenance of Laundry Equipment
            </h1>
            <h3 className="text-lg text-center text-tmbl-drk xl:text-2xl sm:text-xl lg:text-left ">
              All service and maintenance of the laundry equipment shall be the
              responsibility of Tumble.
            </h3>
          </div>
          {/* text div ended */}
          {/* text div started */}
          <div className="my-16">
            <h1 className="text-2xl font-medium text-center uppercase xl:text-4xl sm:text-4xl text-tmbl-lght lg:text-left">
              UTILITIES
            </h1>
            <h3 className="text-lg text-center text-tmbl-drk xl:text-2xl sm:text-xl lg:text-left ">
              The property management and/or building owner will provide all
              utility services necessary for proper operation of above stated
              laundry equipment.
            </h3>
          </div>
          {/* text div ended */}
          {/* text div started */}
          <div className="my-16">
            <h1 className="text-2xl font-medium text-center uppercase xl:text-4xl sm:text-4xl text-tmbl-lght lg:text-left">
              Maintenance, Cleanliness, and Upkeep of Common Laundry Room(s):
            </h1>
            <h3 className="text-lg text-center text-tmbl-drk xl:text-2xl sm:text-xl lg:text-left ">
              The property management and/or building owner will be responsible for proper maintenance, cleaning, and general upkeep of the common area laundry room(s).
            </h3>
          </div>
          {/* text div ended */}
        </div>
      </div>
    </>
  );
}
