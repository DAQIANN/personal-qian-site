import styles from "../../styles/Bio.module.css";
import Link from "./Link";
import { LinkType } from "./types";
import DanielQian from "../../public/danielqian.png";
import Image from "@/node_modules/next/image";

export default function About() {
  const header = (
    <div className="flex flex-row pb-4 justify-center gap-8">
      <Image
        className="w-[30%] h-[30%] rounded-full justify-left"
        src={DanielQian}
        alt="Daniel"
      />
      <div className="flex flex-col items-center justify-center">
        <p>A software engineer</p>
        <p>Based in the Bay Area</p>
      </div>
    </div>
  );

  return (
    <div className="about-root">
      {header}
      <hr />
      {/* <div className="centered about-text-container">
        {description}
      </div> */}
      {/* <div className="centered about-text-container">
                {history}
            </div> */}
    </div>
  );
}