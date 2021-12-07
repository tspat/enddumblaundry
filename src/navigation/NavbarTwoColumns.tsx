import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="sticky flex flex-wrap justify-between items-en">
    <div>
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>

    <nav>
      <ul className="sticky flex items-center text-xl font-medium text-gray-800 navbar">
        {props.children}
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:first-child) {
          @apply mr-5;
          @apply mt-2;
          @apply pt-2;
        }

        .navbar :global(li:not(:first-child:last-child)) {
          @apply mr-5;
          @apply pt-0;
        }

        .navbar :global(li:last-child) {
          @apply mt-0;
          @apply pt-0;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
