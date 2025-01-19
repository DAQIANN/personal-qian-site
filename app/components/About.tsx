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
        <h2>Hey, I&apos;m Daniel!</h2>
        <p>A software engineer</p>
        <p>Based in the Bay Area</p>
      </div>
    </div>
  );

  const description = (
    <>
      <p>
        I&apos;m currently a software engineer at{" "}
        <Link
          href="https://about.google"
          cssID="google"
          linkType={LinkType.STRING}
        >
          <span className={styles.google}>
            <span className={styles.g}>G</span>
            <span className={styles.o1}>o</span>
            <span className={styles.o2}>o</span>
            <span className={styles.g2}>g</span>
            <span className={styles.l}>l</span>
            <span className={styles.e}>e</span>
          </span>{" "}
        </Link>{" "}
        working on Cloud SQL.
      </p>
      <p>
        I graduated from{" "}
        <Link
          href="https://cs.illinois.edu"
          cssID="uiuc-cs"
          linkType={LinkType.STRING}
        >
          <span className={styles.uiuccs}>UIUC</span>
        </Link>{" "}
        studying Mathematics and Computer Science with a Minor in Statistics.
      </p>
    </>
  );

  return (
    <div className="about-root">
      {header}
      <hr />
      <div className="centered about-text-container">
        {description}
      </div>
      {/* <div className="centered about-text-container">
                {history}
            </div> */}
    </div>
  );
}