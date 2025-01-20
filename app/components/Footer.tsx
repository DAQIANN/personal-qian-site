import React from "react";

import "./Footer.css";

import { IconTray } from "./IconTray";

export default function Footer(): React.ReactElement {
  return (
    <div className="footer-root">
      {/* <IconTray iconSize="lg" darkMode /> */}
      <p className="credit">Daniel Qian</p>
      <p className="credit">2025 - 2025</p>
    </div>
  );
}