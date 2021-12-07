// import Link from 'next/link';
import ReactPlayer from 'react-player';
// import { IntercomProvider, useIntercom } from 'react-use-intercom';

import { Background } from '../background/Background';
// import { Button } from '../button/Button';
// import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="#FFFFFF">
    <Section yPadding="py-5">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <a>
            <img src="/assets/images/client.png" alt="" width="150px" />
          </a>
        </li>
        <li>
          <h1 className="pt-2">+</h1>
        </li>
        <li>
          <img src="assets/images/tumblelogo.png" alt="" width="175px" />
        </li>
      </NavbarTwoColumns>
    </Section>

    <div>
      <img src="/assets/images/heroimage.png" alt="" width="100%" />
      <div className="w-10/12 ml-auto mr-auto">
        <div className="grid grid-cols-2 gap-16">
          <div className="col-span-1">
            <img
              src="/assets/images/phonedryer.png"
              width="100%"
              alt=""
              className=" lg:-mt-16 md:mt-0 sm:-mt-1"
            />
          </div>
          <div className="col-span-1 sm:-mt-10 md:mt-18 lg:mt-10 xl:mt-20">
            <ReactPlayer
              url={'https://www.youtube.com/watch?v=ZwYDVp7NPrw'}
              volume={0.5}
              width="100%"
              controls={true}
            />
          </div>
        </div>
      </div>
    </div>
    <Section yPadding="pt-20 pb-32">
      {/* <HeroOneButton
        title={
          <>
            {'Tumble Primary Line Here \n'}
            <span className="italic text-tmbl-lght">#SMARTLAUNDRY</span>
          </>
        }
        description="Designed to solve the biggest problems residents experience when doing laundry in
        shared spaces."
        button={
          <Link href="https://tumble.to/support.html">
            <a>
              <Button xl>Contact Us</Button>
            </a>
          </Link>
        } */}
      {/* /> */}
    </Section>
  </Background>
);

export { Hero };
