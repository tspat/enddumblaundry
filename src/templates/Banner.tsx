import Link from 'next/link';

import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Have Questions? Chat With Us!"
      subtitle=""
      button={
        <Link href="https://tumble.to">
          <a></a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
