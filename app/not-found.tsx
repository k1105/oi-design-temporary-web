import Image from "next/image";
import Link from "next/link";
import styles from "./error.module.css";
import circleStyles from "./components/circle.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <Link
        href="/"
        className={`${circleStyles.circle} ${circleStyles.circleRed}`}
      />
      <main className={styles.main}>
        <Image
          src="/404_not_found.svg"
          alt="404 Not Found"
          width={400}
          height={400}
          priority
          className={styles.errorImage}
        />
      </main>
    </div>
  );
}
