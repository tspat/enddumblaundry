// import Link from 'next/link';
// import { IntercomProvider, useIntercom } from 'react-use-intercom';
import { Background } from '../background/Background';
// import { Button } from '../button/Button';
// import { HeroOneButton } from '../hero/HeroOneButton';
// import { Section } from '../layout/Section';
// import ReactPlayer from 'react-player';


const Header = () => (
  <Background color="bg-gradient-to-r from-tmbl-from to-tmbl-lght object-contain">
      <div className="w-full ml-auto mr-auto">
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="col-span-full lg:col-span-1">
            <img src="assets/images/Header.png" />
          </div>
          <div className="col-span-full mx-5 md:col-span-1 justify-left py-5 lg:py-48 lg:mx-auto">
            <h2 className="text-left justify-left text-md lg:text-3xl leading-8 font-extrabold tracking-tight text-white ">
            Earn laundry credits <br></br><br></br>
            </h2>
            <h3 className="text-left justify-center text-sm lg:text-xl leading-8 font-extrabold tracking-tight text-white ">
              Shop your favorite brands, and automatically receive laundry credits.
            </h3>
          </div>
        </div>
        <img className="filter contrast-200" src="assets/images/Wave.svg" />
      </div>
      
  </Background>
);

export { Header };
