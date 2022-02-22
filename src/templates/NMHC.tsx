// import Link from 'next/link';
import ReactPlayer from 'react-player';
// import { IntercomProvider, useIntercom } from 'react-use-intercom';

import { Background } from '../background/Background';
// import { Button } from '../button/Button';
// import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const NMHC = () => (
  <Background color="#4593AD">

    <div>
      <img src="/assets/images/stats.png" alt="" width="100%" />
      <div className="w-10/12 ml-auto mr-auto">
        <div className="grid grid-cols-2 gap-16">
          <div className="col-span-full sm:col-span-1">
            <img
              src="/assets/images/NMHC.png"
              width="100%"
              alt=""
              className=" lg:-mt-16 md:mt-0 sm:-mt-1"
            />
          </div>
          <div className="col-span-full sm:col-span-1 sm:-mt-10 md:mt-18 lg:mt-10 xl:mt-20">
            <ReactPlayer
              url={'https://www.youtube.com/watch?v=Cf1gnl_-FGw'}
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

export { NMHC };
