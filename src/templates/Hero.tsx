// import Link from 'next/link';
// import { IntercomProvider, useIntercom } from 'react-use-intercom';

import { Background } from '../background/Background';
// import { Button } from '../button/Button';
// import { HeroOneButton } from '../hero/HeroOneButton';



const Hero = () => (
  <Background color="bg-gradient-to-r from-tmbl-from to-tmbl-lght object-contain">
      <div className="w-full ml-auto mr-auto">
        <div className="grid grid-cols-10 gap-2">
          <div className="col-span-1">
          </div>
          <div className="col-span-2 py-6">
            <div className="object-contain w-auto h-auto">
              <a href='https://tumble.to/?earnlanding1'>
              <img src="assets/images/tumblelogo.png" alt="" width="175px" />
              </a>
            </div>
          </div>
          <div className="col-span-4">
          </div>
          <div className="col-span-3">
            <div className="">
              <button className="rounded-full font-sans font-medium text-white text-xs sm:text-s md:text-base bg-tmbl-drk p-1 lg:p-3 lg:px-10 lg:mt-4 mt-6">Sign up for waitlist</button>
            </div>
          </div>
        </div>
      </div>
  </Background>
);

export { Hero };
