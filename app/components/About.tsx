import styles from "../../styles/Bio.module.css";
import Link from "./Link";
import { LinkType } from "./types";

export default function About() {
  return (
    <div>
      <p>
        Hey, I&apos;m Daniel! I&apos;m currently an engineer at{" "}
        <Link
          href="https://about.google/"
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
      <p>I graduated from UIUC, studying Mathematics and Computer Science with a Minor in Statistics.</p>
    </div>
  );
}
