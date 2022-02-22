// import Link from 'next/link';
// import { IntercomProvider, useIntercom } from 'react-use-intercom';
import Lottie from 'react-lottie';
import animationData from '../lotties/neverpay.json';
import { Background } from '../background/Background';
// import { Button } from '../button/Button';
// import { HeroOneButton } from '../hero/HeroOneButton';
// import { Section } from '../layout/Section';
// import ReactPlayer from 'react-player';
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMinYMin slice"
  }
};

const Header = () => (
  <Background color="bg-gradient-to-r from-tmbl-from to-tmbl-lght object-contain">
      <div className="w-full ml-auto mr-auto">
        <div className="grid grid-cols-2 lg:grid-cols-10 gap-8">
          <div className="col-span-full lg:col-span-7">
            <div className="object-contain w-auto h-auto">
                <Lottie 
                  options={defaultOptions}
                />
              </div>
            </div>
          <div className="col-span-1 lg:hidden">
            <img src="assets/images/tumblelogo.png" alt="" width="175px" />
          </div>
          <div className=" lg:col-span-3 sm:col-span-3">
            <img
              src="/assets/images/phonedryer.png"
              width="100%"
              alt=""
              className=" lg:mt-16 md:mt-0 sm:-mt-1"
            />
          </div>
        </div>
      </div>
      
  </Background>
);

export { Header };
