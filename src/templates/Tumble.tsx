import React from 'react';

export default function Tumble() {
  return (
    <>
      <div className="py-20 bg-#fffff">
        <div className="w-10/12 ml-auto mr-auto">
          <div className="grid grid-cols-2 gap-16">
            <div className="col-span-2 sm:col-span-1">
              <img
                src="/assets/images/smartvsdumb.png"
                alt=""
                className="w-full h-auto ml-auto mr-auto "
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h1 className="text-2xl font-medium text-tmbl-lght lg:text-5xl sm:text-3xl ">
                TUMBLE VS
              </h1>
              <h1 className="text-2xl font-medium text-tmbl-drk lg:text-5xl sm:text-3xl lg:-mt-4 ">
                THE DUMB{' '}
              </h1>
              <h1 className="text-2xl font-medium text-tmbl-drk lg:text-5xl sm:text-3xl lg:-mt-4 ">
                LAUNDRY
              </h1>
              <h1 className="text-2xl italic font-medium text-tmbl-drk lg:text-5xl sm:text-3xl lg:-mt-4 ">
                `COMPETITION`
              </h1>
              <div className="lg:w-8/12">
                <h2 className="text-tmbl-lght">
                  This is a long winded answer. We understand that some students
                  may not have smartphones. For qualifying campuses, we offer
                  the option of a free installation of our Smart Center.
                  Machines can be paid for and controlled by students using this
                  device
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
