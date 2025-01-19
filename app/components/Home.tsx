import React from 'react';

import { IconTray } from './IconTray';

export default function PageHome(): React.ReactElement {
  return (
    <div className="home-root">
      <p className="home-title">Where to Find Me:</p>
      <br />
      <IconTray iconSize="2x" darkMode={false} />
    </div>
  );
}