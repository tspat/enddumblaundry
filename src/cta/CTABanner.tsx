import { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col p-4 text-center bg-white rounded-md sm:text-left sm:items-center sm:justify-between sm:p-12">
    <div className="text-2xl font-semibold">
      <div className="text-2xl font-medium text-center uppercase xl:text-4xl sm:text-4xl text-tmbl-lght lg:text-center"><b>{props.title}</b></div>
      <div className="text-primary-500">{props.subtitle}</div>
    </div>

    <div className="mt-3 whitespace-no-wrap sm:mt-0 sm:ml-2">
      {props.button}
    </div>
  </div>
);

export { CTABanner };
