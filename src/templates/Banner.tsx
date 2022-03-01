
import Lottie from 'react-lottie';
import animationData from '../lotties/loader.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMinYMin slice"
  }
};

const Banner = () => (
  <div className="w-full ml-auto mr-auto">
    <div className="grid grid-cols-7 items-center grid-flow-row gap-8">
      <div className="col-span-1">
        <div></div>
        
      </div>
      <div className='col-span-1'>
        <img src='/assets/images/passiveearn.png' />
      </div>
      <div className="col-span-1">
        <div className="object-contain w-auto h-auto max-w-sm">
            <Lottie 
              options={defaultOptions}
            />
        </div>
      </div>
      <div className='col-span-1'>
        <img src='/assets/images/tumblebadge.png' />
      </div>
      <div className="col-span-1">
        <div className="object-contain w-auto h-auto max-w-sm">
            <Lottie 
              options={defaultOptions}
            />
        </div>
      </div>
      <div className='col-span-1'>
        <img src='/assets/images/passiveearn.png' />
      </div>
    </div>
  </div>
);

export { Banner };
