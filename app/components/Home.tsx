import React from 'react';

import { IconTray } from './IconTray';

export default function PageHome(): React.ReactElement {
  return (
    <div className="home-root">
      <p className="home-title">hello, i am daniel</p>
      <br />
      <IconTray iconSize="2x" darkMode={false} />
    </div>
  );
}