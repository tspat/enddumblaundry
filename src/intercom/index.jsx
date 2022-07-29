import * as React from 'react';

import { useIntercom } from 'react-use-intercom';
import { analytics } from '../templates/Base';

import Script from 'next/script';

export const IntercomChat = () => {
  const { boot, shutdown, hide, show, update } = useIntercom();

  return <button onClick={boot}>
  </button>;
};
