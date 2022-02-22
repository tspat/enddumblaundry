import * as React from 'react';

import { useIntercom } from 'react-use-intercom';

import Script from 'next/script'

export const IntercomChat = () => {
  const { boot, shutdown, hide, show, update } = useIntercom();

  return <button onClick={boot} className="hidden">
  </button>;
};
