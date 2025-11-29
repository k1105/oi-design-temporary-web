import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import circleStyles from "../components/circle.module.css";

export default function Forbidden() {
  return (
    <div className={styles.page}>
      <Link
        href="/"
        className={`${circleStyles.circle} ${circleStyles.circleRed}`}
      />
      <main className={styles.main}>
        <Image
          src="/403_forbidden.svg"
          alt="403 Forbidden"
          width={400}
          height={400}
          priority
          className={styles.errorImage}
        />
      </main>
    </div>
  );
}
