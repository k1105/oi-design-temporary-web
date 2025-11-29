import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/gif/under_construction.gif"
          alt="工事中"
          width={300}
          height={300}
          priority
          className={styles.constructionGif}
        />
      </main>
    </div>
  );
}
