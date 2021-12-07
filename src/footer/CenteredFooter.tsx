import { ReactNode } from 'react';

import { AppConfig } from '../utils/AppConfig';
import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="items-center text-2xl font-semibold text-center text-tmbl-lght">
    {AppConfig.site_name}

    <nav>
      <ul className="flex flex-row justify-center mt-5 text-xl font-medium text-gray-800 navbar">
        {props.children}
      </ul>
    </nav>

    <div className="flex justify-center mt-8">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>

    <div className="mt-8 text-sm">
      <FooterCopyright />
    </div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
