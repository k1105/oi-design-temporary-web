"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./error.module.css";
import circleStyles from "./components/circle.module.css";

export default function Error({}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  return (
    <div className={styles.page}>
      <Link
        href="/"
        className={`${circleStyles.circle} ${circleStyles.circleRed}`}
      />
      <main className={styles.main}>
        <Image
          src="/500_internal_server_error.svg"
          alt="500 Internal Server Error"
          width={400}
          height={400}
          priority
          className={styles.errorImage}
        />
      </main>
    </div>
  );
}
