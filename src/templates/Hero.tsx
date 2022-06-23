import Link from 'next/link';
// import { IntercomProvider, useIntercom } from 'react-use-intercom';
import { analytics } from './Base';
import { Background } from '../background/Background';
// import { Button } from '../button/Button';
// import { HeroOneButton } from '../hero/HeroOneButton';



const Hero = () => (
  <Background color="bg-gradient-to-r from-tmbl-from to-tmbl-lght object-contain">
      <div onLoad={() => analytics.page('dumblaundryNAA')} className="w-full ml-auto mr-auto">
        <div className="grid grid-cols-10 gap-2">
          <div className="col-span-1">
          </div>
          <div className="col-span-3 md:col-span-2 py-6">
            <div className="object-contain w-auto h-auto">
              <a href='https://tumble.to/?stopdumblaundry'>
              <img src="assets/images/tumblelogo.png" alt="" width="175px" />
              </a>
            </div>
          </div>
          <div className="col-span-2 md:col-span-3">
          </div>
        </div>
      </div>
  </Background>
);

export { Hero };
