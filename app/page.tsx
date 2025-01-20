import PageHome from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import styles from "../styles/Bio.module.css";
import Link from "./components/Link";
import { LinkType } from "./components/types";

export default function Home() {
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
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center justify-center flex-grow p-8 sm:p-20">
        <h2 className="text-4xl sm:text-6xl font-[family-name:var(--font-geist-sans)] text-center">
          Hey, I&apos;m Daniel!
        </h2>
        <About />
      </main>
      <main className="flex flex-col gap-8 items-center justify-center flex-grow p-8 sm:p-20">
        {description}
      </main>
      <main className="flex flex-col gap-8 items-center justify-center flex-grow p-8 sm:p-20">
        <PageHome />
      </main>
      <footer className="bg-black text-white py-6 w-full">
        <Footer />
      </footer>
    </div>
  );
}
